const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
const Order = require('../models/Order')

//returns all posts
router.get('/', async (req,res) =>{
    try{
        const orders = await Order.find()
        res.json(orders)
    }
    catch(err){
        res.json({message:err})
    }
});

//add an order
router.post('/', async (req,res)=>{
    const order = new Order({
        id: req.body.id,
        description: req.body.description,
        driver: req.body.driver,
        revenue: req.body.revenue,
        cost: req.body.cost
    })

    try{
        const savedOrder = await order.save()
        res.json(savedOrder);
    }catch(err){
        res.json({message: err})
    }
    
})

//grab specific order
router.get('/:orderId', async (req,res)=>{
    try{
        const order = await Order.findById(req.params.orderId)
        res.json(order);
    }
    catch(err){
        res.json({message: err})
    }
})


//delete order
router.delete('/:orderID', async (req,res) =>{
    try{
        const removedOrder = await Order.deleteOne({_id: req.params.orderID})
        res.json(removedOrder)
    }
    catch(err){
        res.json({message:err})
    }
})

//update an order
router.patch('/:orderID', async (req,res) =>{
    try{
        const updateOrder = await Order.updateMany(
            {_id: req.params.orderID},
            {$set: {
                driver: req.body.driver,
                revenue: req.body.revenue,
                cost: req.body.cost}})
        res.json(updateOrder)
    }
    catch(err){
        res.json({messsage: err})
    } 
})


module.exports = router;