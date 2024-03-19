const mongoose=require("mongoose")

const Schema=mongoose.Schema

const sc=new Schema({
_id : Schema.Types.ObjectId,
nom : String



})


const Model=mongoose.model("personne",sc)


module.exports=Model