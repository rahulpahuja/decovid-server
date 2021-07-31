const express = require('express');
const router = express.Router();
const States = require('../model/State');
//const supplierRouter = express.Router({ mergeParams: true });

const GET_ALL_States='Get all States Called';

const DELETE_REQUESTER_BY_ID='Delete Requester by Id Called';

const CREATE_REQUESTER='Create Requester Called';

const UPDATE_REQUESTER='Update Requester Called';

function print(data){
    console.log(data);
}

router.get('/',async(req,res)=>{
    print(GET_ALL_States);
    try{
            const requester = await States.find();
            res.json(requester);
            
    }catch(err){
        res.send("Error: "+err);
    }
});


//Find by Id
router.get('/:state_id',async(req,res)=>{
    console.log('from States');
    try{
            const requester = await States.findById(req.params.state_id);
            if(requester==null){
                res.json("Requester Does not Exist")
            }
            res.json(requester);
            
    }catch(err){
        res.send("Error: "+err);
    }
});


router.post("/",async(req,res)=>{
    print(CREATE_REQUESTER);
    try{
            const requester = new States({
                state_id: req.body.state_id,
                state_name:req.body.state_name,
                country:req.body.country,
            });
            const a1 = await requester.save();
            res.json(a1);
            
    }catch(err){
        res.status(404);
        res.send("Error: "+err);
    }
});


//Patch Request
router.patch('/:id',async(req,res)=>{
    print(UPDATE_REQUESTER);
    try{
        const arequester = await States.findById(req.params.id);
        arequester.name = req.body.name;
        const a1 = await arequester.save();
        res.json(a1);
    }catch(err){
        res.status(404);
        res.send("Error:"+err);
    }
});

//Delete States by id
router.delete('/:state_id',async(req,res)=>{
    print(DELETE_REQUESTER_BY_ID);
    try{
        const arequester = await States.findOne(req.params.state_id);
        const serverResponse = await States.remove(arequester);
        res.json(serverResponse);
    }catch(error){
        res.status(404);
        res.send("Error:"+error);
    }
});



module.exports = router;