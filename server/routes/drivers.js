const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
const Driver = require('../models/Driver')

//returns all drivers
router.get('/', async (req,res) =>{
    try{
        const drivers = await Driver.find()
        res.json(drivers)
    }

    catch(err){
        res.json({message:err})
    }
});

//grab specific post
router.get('/:driverId', async (req,res)=>{
    try{
        const driver = await Driver.findById(req.params.driverId)
        res.json(driver);
    }

    catch(err){
        res.json({message: err})
    }
})

//add new driver
router.post('/', async (req,res)=>{
    const driver = new Driver({
        name: req.body.name,
        license: req.body.license
    })

    try{
        const savedDriver = await driver.save()
        res.json(savedDriver);
    }catch(err){
        res.json({message: err})
    }
})

//delete driver
router.delete('/:driverID', async (req,res) =>{
    try{
        const removedDriver = await Driver.deleteOne({_id: req.params.driverID})
        res.json(removedDriver)
    }
    catch(err){
        res.json({message:err})
    }
})

module.exports = router;