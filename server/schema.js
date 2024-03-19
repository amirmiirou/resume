const mongoose=require("mongoose")
const schema=mongoose.Schema

const x=new schema({


name : String,
email : String,
phone : String,
adress : String,
message : String

})


const model=mongoose.model("messages",x)


module.exports=model