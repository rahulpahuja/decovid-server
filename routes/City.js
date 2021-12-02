const express = require('express');
const router = express.Router();
const Citys = require('../model/City');
const GET_ALL_Citys='Get all Citys Called';
const DELETE_City_BY_ID='Delete City by Id Called';
const CREATE_City='Create City Called';
const UPDATE_City='Update City Called';
//Printer Function for Printing Data
function print(data){
    console.log(data);
}
//GET ALL CITIES
router.get('/',async(req,res)=>{
    print(GET_ALL_Citys);
    try{
            const City = await Citys.find();
            res.json(City);
            
    }catch(err){
        res.send("Error: "+err);
    }
});
//Get by City By Id
router.get('/:id',async(req,res)=>{
    console.log('from Citys');
    try{
            const City = await Citys.findById(req.params.id);
            if(City==null){
                res.json("City Does not Exist")
            }
            res.json(City);
            
    }catch(err){
        res.send("Error: "+err);
    }
});
//POST: CREATE CITY
router.post("/",async(req,res)=>{
    print(CREATE_City);
    try{
            const City = new Citys({
                city_id: req.body.city_id,
                city_name:req.body.city_name,
                state_id:req.body.state_id,
            });
            const a1 = await City.save();
            res.json(a1);
            
    }catch(err){
        res.status(404);
        res.send("Error: "+err);
    }
});
//Patch: Request
router.patch('/:id',async(req,res)=>{
    print(UPDATE_City);
    try{
        const aCity = await Citys.findById(req.params.id);
        aCity.name = req.body.name;
        const a1 = await aCity.save();
        res.json(a1);
    }catch(err){
        res.status(404);
        res.send("Error:"+err);
    }
});
//Delete: City by id
router.delete('/:id',async(req,res)=>{
    print(DELETE_City_BY_ID);
    try{
        const aCity = await Citys.findById(req.params.id);
        const serverResponse = await Citys.remove(aCity);
        res.json(serverResponse);
    }catch(error){
        res.status(404);
        res.send("Error:"+error);
    }
});
module.exports = router;