const express = require('express');
const router = express.Router();
const Requesters = require('../model/Requester');
//const supplierRouter = express.Router({ mergeParams: true });

const GET_ALL_REQUESTERS='Get all Requesters Called';

const DELETE_REQUESTER_BY_ID='Delete Requester by Id Called';

const CREATE_REQUESTER='Create Requester Called';

const UPDATE_REQUESTER='Update Requester Called';

function print(data){
    console.log(data);
}

router.get('/',async(req,res)=>{
    print(GET_ALL_REQUESTERS);
    try{
            const requester = await Requesters.find();
            res.json(requester);
            
    }catch(err){
        res.send("Error: "+err);
    }
});


//Find by Id
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


//Patch Request
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

//Delete Requesters by id
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