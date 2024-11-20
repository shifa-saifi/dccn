const mongoose = require('mongoose');
const schema = mongoose.Schema;

const LoanModel = new schema({
    LoanId: String,
    FirstName: String,
    LastName: String,
    DateOfBirth:String,
    Gender:String,
    MobileNum:String,
    EmailId:String,
    AadharCard:String,
    PanCard:String,
    LoanAmount:String,
    LoanType:String,
    IssuerName:String,
    CIBIL:String


}, { timestamps: true });

const ShipmentSchema= new schema({
    CurrentLocation:String,
    ShipmentId:String,
    Product:String,
    StartDate:String,
    Quantity:String,
    Value:String
})

module.exports = mongoose.model('LoanModel', LoanModel);

module.exports = mongoose.model('ShipmentModel', ShipmentSchema);
