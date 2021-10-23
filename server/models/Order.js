const mongoose = require('mongoose')

//acceptable order object properties
const PostSchema = mongoose.Schema({
    id: Number,
    description: {
        type: String,
        required: true
    },
    driver: String,
    revenue: Number,
    cost: Number
})

module.exports = mongoose.model('Orders', PostSchema)