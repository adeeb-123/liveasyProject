const mongoose = require("mongoose")
var val = Math.floor(1000 + Math.random() * 9000);

const loadSchema = new mongoose.Schema({
    loadingPoint:{
        type : String,
        required : true
    },
    unloadingPoint:{
        type : String,
        required:true
    },
    productType:{
        type : String,
        required : true
    },
    truckType:{
        type : String,
        required : true
    },
    noOfTrucks:{
        type : Number,
        required : true
    },
    weight:{
        type : Number,
        required : true
    },
    comment:{
        type : String
    },
    shipperId : {
        type : Number,
        default: val
    },
    date : {
        type : Date,
        default : new Date()
    }

})

const RegisterLoad = new mongoose.model("loadData" , loadSchema)

module.exports = RegisterLoad
