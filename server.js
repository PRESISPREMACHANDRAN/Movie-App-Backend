const express =require("express")
const cors=require("cors")
const bodyParser=require("body-parser")
const mongoose=require("mongoose")

const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

mongoose.connect(
  "mongodb+srv://presi123:presi123@cluster0.dfo33ti.mongodb.net/MovieDB?retryWrites=true&w=majority"
);

app.listen(4000,()=>{
    console.log("server starts running")
})