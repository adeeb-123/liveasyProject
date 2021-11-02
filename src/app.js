const express = require("express")
const app = express()

require("./db/conn")
const RegisterLoad = require("./models/registerData")

const port = process.env.PORT || 3000


app.get("/",(req,res)=>{
    res.send("API Project")
})

// Create a new load in database
app.post("/loadData" , async (req,res)=>{
    try {
        console.log(req.body)
        const data = new RegisterLoad(req.body)
        const loadedData = await data.save()
        res.status(201).send(loadedData)
    } catch (error) {
        res.status(400).send(error)
    }
})

// Reading the loaded data 
app.get("/loadData/:shipperId", async (req,res)=>{
    try {
        const loadShipperID = req.params.shipperId
        const loadData = await RegisterLoad.findOne({shipperId: loadShipperID});

        console.log(loadData)
        if(!loadData){
            return res.status(404).send()
        }
        else{
            res.send(loadData)
        }
    } catch (error) {
        res.send(error)
    }
})


// Update load data
app.patch("/loadData/:shipperId", async (req,res)=>{
    try {
        const loadShipperID = req.params.shipperId
        const UpdateLoadData = await RegisterLoad.findByIdAndUpdate({shipperId: loadShipperID} , req.body , {new : true})
        res.status(200).send(UpdateLoadData)
    } catch (error) {
        res.status(400).send(error)
    }
})

// delete data
app.delete("/loadData/:shipperId" , async (req,res)=>{
    try {
        const loadShipperID = req.params.shipperId
        const DeleteLoad = await RegisterLoad.deleteOne({shipperId : loadShipperID})
        res.send(DeleteLoad)
    } catch (error) {
        res.status(404).send(error)
    }
})


app.listen(port , ()=>{
    console.log(`server is running at port ${port}`)
})