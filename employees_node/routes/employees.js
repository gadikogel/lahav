const express = require("express");
const {EmployeeModel,validateEmployee}= require("../models/employeeModel");
const router = express.Router();

router.get("/", async(req,res) => {

  try{
    const data = await EmployeeModel.find({});
    res.json(data);
  }
  catch(err){
    console.log(err);
    res.status(502).json({err})
  }
})

router.post("/",async(req,res) => {
  const validBody = validateEmployee(req.body);
  if(validBody.error)
  {
    return res.status(400).json(validBody.error.details)
  }
  try{
    const employeeItem = new EmployeeModel(req.body);
    // להוסיף רשומה
    await employeeItem.save();
    res.status(201).json(employeeItem);
  }
  catch(err){
    console.log(err);
    res.status(502).json({err})
  }

})

// update
router.put("/:id", async(req,res) => {
  const validBody = validateEmployee(req.body);
  if(validBody.error)
  {
    return res.status(400).json(validBody.error.details)
  }
  try{
    const id = req.params.id
    const data = await EmployeeModel.updateOne({ID:id},req.body);
    // modfiedCount:1 
    res.json(data);
  }
  catch(err){
    console.log(err);
    res.status(502).json({err})
  }
})

// delete
router.delete("/:id", async(req,res) => {
  try{
    const id = req.params.id;
    const data = await EmployeeModel.deleteOne({ID:id});
    // deletedCount:1 
    res.json(data);
  }
  catch(err){
    console.log(err);
    res.status(502).json({err})
  }
})

module.exports = router