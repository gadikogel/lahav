const mongoose = require("mongoose");
const Joi = require("joi");
const employeeSchema = new mongoose.Schema({
    ID:String,
    name: String,
    position:String,
    salary:Number
},{
    timestamps:true
});
exports.EmployeeModel = mongoose.model("Employees",employeeSchema);

exports.validateEmployee =(_reqBody)=>{
    const joiSchema = Joi.object({
        ID:Joi.string().min(9).max(9).required(),
        name:Joi.string().min(2).max(50).required(),
        position:Joi.string().min(2).max(20).required(),
        salary:Joi.number().min(1000).max(100000).required()
    });
    return joiSchema.validate(_reqBody);
}
