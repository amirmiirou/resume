

const express=require("express")



const app=express()

const cors=require("cors")
//const model=require("./schema")

//const mongoose=require("mongoose")


app.use(cors({origin:"https://resume-client-three.vercel.app"}))

app.use(express.json())

//mongoose.connect("mongodb+srv://miroua132:nait@cluster0.3hythzd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")


app.get("/",(req,res)=>{

res.send("i am server")

})



app.post("/send",(req,res)=>{
/*
new model({
name : req.body.name,
email : req.body.email,
phone : req.body.phone,
adress : req.body.adress,
message: req.body.message


}).save().then((result)=>{
    res.send(result)




})*/


console.log("kkkkkkkkkkkk")

res.send("hello")

})




app.listen(3001,()=>{


console.log("i am listening")

})


