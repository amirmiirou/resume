
import "./contact.css"
import axios from "axios"

import {useState} from "react"

export default function Contact(){

const [name,setName]=useState()
const [email,setEmail]=useState()
const [adress,setAdress]=useState()
const [phone,setPhone]=useState()
const [message,setMessage]=useState()


    return(
    
    
    <div  className="contact   mt-24    pr-5" >
    <h1 id="contact" className=" text-4xl font-extrabold text-blue-300 ">Contact</h1>

<div className="mt-5">

    
    
    
    <h2 className="text-white text-2xl ">ASK ME QUESTION</h2>
    <h1 className="text-blue-400 text-3xl font-bold  mt-8 mb-8">Contact Me</h1>
   
    
<form  className="flex flex-col  justify-between h-80 " >

<div className="flex flex-row ">
<input className="bg-purple-900 text-white w-2/4 " onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="Your Full Name" />
<input className="bg-purple-900 text-white w-2/4 ml-2" onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Your Email"/>
</div>

<div className="flex flex-row">
<input className="bg-purple-900 text-white w-2/4" onChange={(e)=>{setAdress(e.target.value)}} type="text" placeholder="Your Address"/>
<input className="bg-purple-900 text-white w-2/4 ml-2" onChange={(e)=>{setPhone(e.target.value)}} type="tel" placeholder="Your Number"/>
</div>

<textarea className="bg-purple-900 text-white w-full   h-32  overflow-y-scroll " onChange={(e)=>{setMessage(e.target.value)}} placeholder="Your Message" />

<button className=" bg-purple-900 text-blue-300 z-100 w-32



" 
onClick={()=>{


axios.post("https://resume-server-ten.vercel.app/send",{name : name,email:email,adress:adress,phone:phone,message:message})
.then((data)=>{

if(data.data!==null){

alert("your message was sent")

}else{


alert("error occured")

}


})
}}



>Send Message</button>






</form>

  </div>
    




    </div>
    
    
    )
    
    
    }