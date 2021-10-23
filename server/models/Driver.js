const mongoose = require('mongoose')

//acceptable driver object properties
const PostSchema = mongoose.Schema({
    name: {
        type : String,
        required: true
    },
    license : {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Drivers', PostSchema)