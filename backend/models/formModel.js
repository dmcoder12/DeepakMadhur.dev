const mongoose = require('mongoose');

const Schema = mongoose.Schema

const formSchema = new Schema({
    Name: {
        type: String, 
        required: true
    },
    Gender: {
        type: String, 
        required: true
    },
    Age: {
        type: Number,
        required: true
    },
    Email: {
        type: String, 
        required: true
    },
    FullPhone: {
        type: String, 
        required: true
    },
    City: {
        type: String, 
        required: true
    },
    Country: {
        type: String, 
        required: true
    },
    Subject: {
        type: String, 
        required: true
    },
    Message: {
        type: String, 
        required: true
    }
            
}, { timestamps: true })

module.exports = mongoose.model('ClientData', formSchema)

