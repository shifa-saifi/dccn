require("dotenv").config();
const {LoanModel} = require("../models/models");

const {CHAINCODE_ACTIONS, CHAINCODE_NAMES, getNow, CHAINCODE_CHANNEL, generateId}=require('../utils/helper');
const {invokeTransaction}= require('../app/invoke');


exports.createLoan = async (req, res) => {
  try {
    console.log("hello")
    const {
      LoanId,
      FirstName,
      LastName,
      DateOfBirth,
      Gender,
      MobileNum,
      EmailId,
      AadharCard,
      PanCard,
      LoanAmount,
      LoanType,
      IssuerName,
      CIBIL
    }= req.body;
    // console.log('0')
    if (parseInt(CIBIL)<=700){
      res.status(200).json({
        status:"success",
        message: "your CIBIL score is low ! Loan not Allowed"
      })
    }else{

      const data ={
        Id: generateId(),
        CreatedOn:getNow(),
        CreatedBy:"admin",
        IsDelete:"false",
        IsProcessed:"false",
        LoanId,
        FirstName,
        LastName,
        DateOfBirth,
        Gender,
        MobileNum,
        EmailId,
        AadharCard,
        PanCard,
        LoanAmount,
        LoanType,
        IssuerName,
        CIBIL
      }
      // console.log('1')
      console.log(data)
      // const loandata = await LoanModel.create(data);
      console.log('2')
  
      let message = await invokeTransaction({
        metaInfo:{userName:"pintu", org:"org1MSP"},
        chainCodeAction:CHAINCODE_ACTIONS.CREATE,
        channelName:CHAINCODE_CHANNEL,
        data:data,
        chainCodeFunctionName:'create',
        chainCodeName:CHAINCODE_NAMES.LOAN
    })
    console.log("message");
  
      res.status(200).json({
        status:'success',
        message:message
      })

    }
  }catch(err){
    res.send("err")
  }
}