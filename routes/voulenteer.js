const express = require("express");

const voulenteerRouter = express.Router({ mergeParams: true });

const Voulenteer = require("../model/Voulenteer");

voulenteerRouter.post("/addVoulenteer", async (req, res) => {
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
        .json({ status: "error", title: "Create Voulenteer Failed", msg: error });
    }
  });


module.exports = voulenteerRouter;