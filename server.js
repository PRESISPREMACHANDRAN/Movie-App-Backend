const express =require("express")
const cors=require("cors")
const bodyParser=require("body-parser")
const mongoose=require("mongoose")

const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())


// add movies
app.post("/add",(req,res)=>{
    var data=req.body
    res.json({"status":"success","data":data})
})

// search movies
app.post("/search",(req,res)=>{
    var data=req.body
    res.json({"status":"success","data":data})
})

// view all movies
app.post("/viewAll",(req,res)=>{
    var data=req.body
    res.json({"status":"success","data":data})
})

// delete movies
app.post("/delete",(req,res)=>{
    var data=req.body
    res.json({"status":"success","data":data})
})





app.listen(4000,()=>{
    console.log("server starts running")
})