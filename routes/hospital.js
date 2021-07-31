const express = require("express");

const hospitalRouter = express.Router({ mergeParams: true });

const Hospital = require("../model/Hospital");

hospitalRouter.get("/",async(req,res)=>{

  try {
    let h = await Hospital.findAll().exec();
    res.status(200).json({
      status: "success",
      title: "All Hospitals",
      msg: "List of All Hospitals",
      data: { hospitals: h },
    });
} catch (error) {
  res
    .status(400)
    .json({ status: "error", title: "Create Hospital Failed, Try Again", msg: "Error" });
}
});
hospitalRouter.post("/addHospital", async (req, res) => {
    console.log(req.body);
    const { id } = req.body;
    //check for existing supplier
    try {
    //  let v = await Voulenteer.findOne({ email }).exec();
    //   if (v) {
    //     res.status(400).json({
    //       status: "error",
    //       title: "Create Voulenteer Failed",
    //       msg: "Voulenteer already exists.",
    //     });
    //     return;
    //   }
      //create new Hospital
      let hp = new Hospital(req.body);
      await hp.save();

      let hp1 = await Hospital.findOne({ id }).exec();
      res.status(200).json({
        status: "success",
        title: "Create Hospital",
        msg: "Hospital successfully created",
        data: { hospital: hp1 },
      });
    } catch (error) {
      res
        .status(400)
        .json({ status: "error", title: "Create Hospital Failed, Try Again", msg: error });
    }
  });


module.exports = hospitalRouter;