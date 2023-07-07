const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX',  'SAN']
    },
    arrival: {
        type: Date
    },
});



const flightSchema = new mongoose.Schema({
airline: {
    type: String,
    enum: ['Delta', 'American', 'Southwest' ]
},
airport: {
    type: String,
    enum: ['LAX', 'SNA', 'DEN']
},
flightNo: {
    type: Number, 
    required: true,
    min: 10,
    max: 9999,
},

departs:{
    type: Number,
    default: function() {
    return new Date().getFullYear();
    },
    min: 2023,
    max: 2024
},
}, {
    timeStamps: true
});
module.exports = mongoose.model('Flight', flightSchema);