const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/liveEasy").then(()=>{
    console.log("Connection is successful")
}).catch((e)=>{
    console.log(`no connection ,Error : ${error}`)
})