const express = require('express');
const router = express.Router();
const Requesters = require('../model/Requester');
const GET_ALL_REQUESTERS='Get all Requesters Called';
const DELETE_REQUESTER_BY_ID='Delete Requester by Id Called';
const CREATE_REQUESTER='Create Requester Called';
const UPDATE_REQUESTER='Update Requester Called';
//PRINTER Function to Print Data
function print(data){
    console.log(data);
}

//GET: Fetches all Requesters
router.get('/',async(req,res)=>{
    print(GET_ALL_REQUESTERS);
    try{
            const requester = await Requesters.find();
            res.json(requester);
            
    }catch(err){
        res.send("Error: "+err);
    }
});
//GET:Fetches a Requester by Id
router.get('/:id',async(req,res)=>{
    console.log('from requesters');
    try{
            const requester = await Requesters.findById(req.params.id);
            if(requester==null){
                res.json("Requester Does not Exist")
            }
            res.json(requester);
            
    }catch(err){
        res.send("Error: "+err);
    }
});

//POST: Create a new Requester
router.post("/",async(req,res)=>{
    print(CREATE_REQUESTER);
    try{
            const requester = new Requesters({
                firstName: req.body.firstName,
                lastName:req.body.lastName,
                city:req.body.city,
                state:req.body.state,
                phoneNumber:req.body.phoneNumber,
                address:req.body.address,
            });
            const a1 = await requester.save();
            res.json(a1);
            
    }catch(err){
        res.status(404);
        res.send("Error: "+err);
    }
});


//PATCH:Update Requester by Id
router.patch('/:id',async(req,res)=>{
    print(UPDATE_REQUESTER);
    try{
        const arequester = await Requesters.findById(req.params.id);
        arequester.name = req.body.name;
        const a1 = await arequester.save();
        res.json(a1);
    }catch(err){
        res.status(404);
        res.send("Error:"+err);
    }
});

//DELETE:Delete Requester by id
router.delete('/:id',async(req,res)=>{
    print(DELETE_REQUESTER_BY_ID);
    try{
        const arequester = await Requesters.findById(req.params.id);
        const serverResponse = await Requesters.remove(arequester);
        res.json(serverResponse);
    }catch(error){
        res.status(404);
        res.send("Error:"+error);
    }
});
module.exports = router;