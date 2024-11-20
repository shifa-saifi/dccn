require("dotenv").config();
const Shipment = require("../models/models");
const {CHAINCODE_ACTIONS, CHAINCODE_NAMES, getNow, CHAINCODE_CHANNEL, generateId}=require('../utils/helper');
const {invokeTransaction}= require('../app/invoke');
exports.createShipment = async (req, res) => {
  try {
    let{
      CurrentLocation,
      ShipmentId,
      Product,
      StartDate,
      Quantity,
      Value
    }=req.body;

    const data = {
      Id: generateId(),
      CreatedOn:getNow(),
      CreatedBy:"admin",
      IsDelete:"false",
      IsHidden:"false",
      IsProcessed:"false",
      CurrentLocation,
      ShipmentId,
      Product,
      StartDate,
      Quantity,
      Value
    }



        let message = await invokeTransaction({
      metaInfo:{userName:"pintu", org:"org1MSP"},
      chainCodeAction:CHAINCODE_ACTIONS.CREATE,
      channelName:CHAINCODE_CHANNEL,
      data:data,
      chainCodeFunctionName:'create',
      chainCodeName:CHAINCODE_NAMES.SHIPMENT
  })
  console.log(message);

  res.status(200).json({
    status:"success",
    message:message
  })
  }catch(err){
    res.send("err")
  }
}

exports.getShipment= async(req, res)=>{

  try{


    let query = { selector: {ShipmentId:req.query.ShipmentId,  IsDelete:false } };

    let queryString = JSON.stringify(query);

    let dataStr = await invokeTransaction({
      metaInfo:{userName:"pintu", org:"org1MSP"},
      chainCodeAction: CHAINCODE_ACTIONS.GET,
      channelName: CHAINCODE_CHANNEL,
      data: queryString,
      chainCodeFunctionName: "querystring",
      chainCodeName: CHAINCODE_NAMES.SHIPMENT,
    });

    res.set("Content-Type", "application/json");
    let data = JSON.parse(dataStr);


    console.log(data);
        res.status(200).json({
            status:200,
            message:data
        })

  }catch(err){
    res.send('err')
  }
}

exports.updateShipment= async(req, res)=>{
  try{
    
    let query = { selector: {ShipmentId:req.query.ShipmentId,  IsDelete:false } };

    let queryString = JSON.stringify(query);

    let dataStr = await invokeTransaction({
      metaInfo:{userName:"pintu", org:"org1MSP"},
      chainCodeAction: CHAINCODE_ACTIONS.GET,
      channelName: CHAINCODE_CHANNEL,
      data: queryString,
      chainCodeFunctionName: "querystring",
      chainCodeName: CHAINCODE_NAMES.SHIPMENT,
    });

    res.set("Content-Type", "application/json");
    let data = JSON.parse(dataStr);
    data = data[0]
    console.log(data.CurrentLocation)


    const updatedata = {
      Id: data.Id,
      CreatedOn:data.CreatedOn,
      CreatedBy:"admin",
      IsDelete:"false",
      IsHidden:"false",
      IsProcessed:"true",
      CurrentLocation:req.query.CurrentLocation,
      ShipmentId:data.ShipmentId,
      Product:data.Product,
      StartDate:data.StartDate,
      Quantity:data.Quantity,
      Value:data.Value
    }
    let updateShipment = await invokeTransaction({
      metaInfo:{userName:"pintu", org:"org1MSP"},
      chainCodeAction:CHAINCODE_ACTIONS.UPDATE,
      channelName:CHAINCODE_CHANNEL,
      data:updatedata,
      chainCodeFunctionName:'update',
      chainCodeName:CHAINCODE_NAMES.SHIPMENT
  })

  console.log(updateShipment);


  res.status(200).json({
    status:"success",
    message:updateShipment
  })
  }catch(err){
    res.send("err")
  }
}
