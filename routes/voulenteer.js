const express = require("express");
const voulenteerRouter = express.Router({ mergeParams: true });
const Voulenteer = require("../model/Voulenteer");
//GET: Fetches all voulenteers
voulenteerRouter.get("/",async(req,res)=>{
  try {
    let v = await Voulenteer.findAll().exec();
    res.status(200).json({
      status: "success",
      title: "All Voulenteers",
      msg: "List of All Voulenteers",
      data: { voulenteers: v },
    });
} catch (error) {
  res
    .status(400)
    .json({ status: "error", title: "Create Voulenteer Failed, Try Again", msg: "Error" });
}
});
//POST:Add Voulenteer
voulenteerRouter.post("/addV", async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;
    //check for existing supplier
    try {
      let v = await Voulenteer.findOne({ email }).exec();
      if (v) {
        res.status(400).json({
          status: "error",
          title: "Create Voulenteer Failed",
          msg: "Voulenteer already exists.",
        });
        return;
      }
      //create new Supplier
      let vr = new Voulenteer(req.body);
      await vr.save();
      let cv = await Voulenteer.findOne({ email }).exec();
      res.status(200).json({
        status: "success",
        title: "Create Voulenteer",
        msg: "Voulenteer successfully created",
        data: { voulenteer: cv },
      });
    } catch (error) {
      res
        .status(400)
        .json({ status: "error", title: "Create Voulenteer Failed, Try Again", msg: error });
    }
  });
module.exports = voulenteerRouter;