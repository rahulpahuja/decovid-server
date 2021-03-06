const express = require("express");
const supplierRouter = express.Router({ mergeParams: true });
const Supplier = require("../model/Supplier");
const SupplierAgreement = require("../model/SupplierAgreement");

//GET: Fetches all supplier
/** DUMMY GET ALL Suppliers **/
supplierRouter.get("/", async (req, res) => {
  var object = {
    isActive: "false",
    name: "Rahul",
    phoneNumber: "8888888888",
    supplies: "{BLOOD,OXYGEN}",
    id: "1",
    state: "Madhya Pradesh",
    city: "Indore",
    address: "Raja Ram Nagar",
    organization: "Individual",
    isReported: "false",
    reportedCount: "0",
    image: "www.google.com",
  };
  var object1 = {
    isActive: "false",
    name: "Raj",
    phoneNumber: "8888888888",
    supplies: "{BLOOD,OXYGEN}",
    id: "2",
    state: "Madhya Pradesh",
    city: "Indore",
    address: "Raja Ram Nagar",
    organization: "Individual",
    isReported: "false",
    reportedCount: "0",
    image: "www.google.com",
  };
  var object2 = {
    isActive: "false",
    name: "Rock",
    phoneNumber: "8888888880",
    supplies: "{BLOOD,OXYGEN}",
    id: "3",
    state: "Madhya Pradesh",
    city: "Indore",
    address: "Raja Ram Nagar",
    organization: "Individual",
    isReported: "false",
    reportedCount: "0",
    image: "www.google.com",
  };

  var myList = new Array();
  myList.push(object1);
  myList.push(object);
  myList.push(object2);
  myList.push(object);
  myList.push(object);
  myList.push(object1);
  myList.push(object);
  myList.push(object2);
  myList.push(object2);
  myList.push(object2);
  res.send(myList);
});

//GET: Fetches all Supplier
supplierRouter.get("/getAllSuppliers", async (req, res) => {
  try{
    let suppliers = await Supplier.find().exec();
    console.log(suppliers);
    let responseObject = {
      status: "success",
      title: "Get all suppliers.",
      msg: "Suppliers found.",
      data: { suppliers: suppliers },
    };
    return res.status(200).json(responseObject);
  } catch(err){
    res
    .status(400)
    .json({ status: "error", title: "GetSupplierFailed", msg: error });
  }
});
//GET: Gets agreement
supplierRouter.get("/agreement",async(req,res)=>{
  console.log(req.body);
  try{
    let supplierAgreement1 = await SupplierAgreement.find({"isActive":true}).exec();
    let responseObject={
      status: "success",
      title: "Supplier Agreement",
      msg: "Supplier Agreement Fetched Successfully",
      data: { supplierAgreement: supplierAgreement1 },
    }
    return res.status(200).json(responseObject);
  }catch(error){
    return res.status(400).json({
      status: "error",
      title: "Cannot Find Supplier Agreement",
      msg: "Supplier agreement Does not exist",
    });
  };
});
//POST:Creates a Supplier
supplierRouter.post("/addSupplier", async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  //check for existing supplier
  try {
    let existingSupplier = await Supplier.findOne({ email }).exec();
    if (existingSupplier) {
      res.status(400).json({
        status: "error",
        title: "CreateSupplierFailed",
        msg: "Supplier already exists.",
      });
      return;
    }
    //create new Supplier
    let supplier = new Supplier(req.body);
    await supplier.save();
    let createdSupplier = await Supplier.findOne({ email }).exec();
    res.status(200).json({
      status: "success",
      title: "CreateSupplier",
      msg: "Supplier successfully created",
      data: { supplier: createdSupplier },
    });
  } catch (error) {
    res
      .status(400)
      .json({ status: "error", title: "CreateSuplierFailed", msg: error });
  }
});
//DELETE: Deletes a supplier 
supplierRouter.delete("/:email",async(req,res)=>{
  const { email } = req.params;
  await Supplier.delete({email})
});
//GET: Gets a Supplier by Email
supplierRouter.get("/:email", async (req, res) => {
  const { email } = req.params;
  let existingSupplier = await Supplier.findOne({ email }).exec();
  if (existingSupplier) {
    res.status(200).json({
      status: "success",
      title: "Supplier found.",
      msg: "Supplier successfully found",
      data: { supplier: existingSupplier },
    });
    return;
  } else {
    res.status(400).json({
      status: "error",
      title: "CreateSupplierFailed",
      msg: "Supplier already exists.",
    });
  }
});
module.exports = supplierRouter;
