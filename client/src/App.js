import './App.css';
import {BrowserRouter } from "react-router-dom" 
import Home from "./navbar/home"
import About from "./navbar/about"
import Services from "./navbar/services"
import Skills from "./navbar/skills"
import Projects from './navbar/projects';
import Contact from './navbar/contact';
import {FiDelete} from "@react-icons/all-files/fi/FiDelete"
import {AiOutlineMenu} from "@react-icons/all-files/ai/AiOutlineMenu" 

import {HashLink} from "react-router-hash-link"

 import { useEffect, useState } from 'react';
 let start,end,index

/*

document.getElementById("second").classList.remove("before:content:''"
,"before:absolute"
,"before:top-0"
,"before:left-0"
,"before:bottom-0" 
,"before:right-0"
,"before:bg-blue-300"
,"before:scale-x-0"
,"before:origin-left"
,"before:duration-1000"
,"before:ease-in-out"
,"before:z-200"
,"hover:text-purple-900"
,"hover:before:scale-x-100","relative","z-100")




*/



 function App() {

  
window.onscroll=()=>{document.getElementById("first").classList.remove("before:content:''"
,"before:absolute"
,"before:top-0"
,"before:left-0"
,"before:bottom-0" 
,"before:right-0"
,"before:bg-blue-300"
,"before:scale-x-0"
,"before:origin-left"
,"before:duration-1000"
,"before:ease-in-out"
,"before:z-200"
,"hover:text-purple-900"
,"hover:before:scale-x-100","relative","z-100")



document.getElementById("third").classList.remove("before:content:''"
,"before:absolute"
,"before:top-0"
,"before:left-0"
,"before:bottom-0" 
,"before:right-0"
,"before:bg-blue-300"
,"before:scale-x-0"
,"before:origin-left"
,"before:duration-1000"
,"before:ease-in-out"
,"before:z-200"
,"hover:text-purple-900"
,"hover:before:scale-x-100","relative","z-100")



}
const [option,setOption]=useState(false)


window.addEventListener("resize",()=>{

  if(option===true){
    setOption(false)
        }
    
})

useEffect(()=>{



  


})





return (
    <div id="global" className="App  bg-black  ml-8  ">


<BrowserRouter>



<div className='flex flex-row bg-black justify-between items-center h-12 sticky top-0 left-0 '>
<div className='h-full flex flex-col justify-end'><p id="nait" className=' first-letter:text-blue-400 font-bold text-3xl text-white w-44   '>Portfolio.</p></div>

<div id='navbar' className='   pr-5 
xl:flex xl:flex-row xl:justify-between   xl:items-end xl:h-full
   lg:flex lg:justify-between lg:flex-grow lg:items-end lg:h-full
    md:flex md:justify-between md:flex-grow md:items-end md:h-full
    sm:flex sm:flex-grow sm:justify-between sm:items-end  sm:h-full  hidden'>
<HashLink id="lien1" className="text-white font-medium text-xl    " to="#home"  onMouseLeave={(e)=>{e.target.classList.remove("text-blue-500");e.target.classList.add("text-white")}} onMouseEnter={(e)=>{e.target.classList.remove("text-white");e.target.classList.add("text-blue-500")}}>Home</HashLink>
<HashLink id="lien2" className="text-white font-medium text-xl " to="#about" onMouseLeave={(e)=>{e.target.classList.remove("text-blue-500");e.target.classList.add("text-white")}} onMouseEnter={(e)=>{e.target.classList.remove("text-white");e.target.classList.add("text-blue-500")}}>About</HashLink>
<HashLink id="lien3" className="text-white font-medium text-xl" to="#services" onMouseLeave={(e)=>{e.target.classList.remove("text-blue-500");e.target.classList.add("text-white")}} onMouseEnter={(e)=>{e.target.classList.remove("text-white");e.target.classList.add("text-blue-500")}}>Services</HashLink>
<HashLink id="lien6" className="text-white font-medium text-xl" to="#projects" onMouseLeave={(e)=>{e.target.classList.remove("text-blue-500");e.target.classList.add("text-white")}} onMouseEnter={(e)=>{e.target.classList.remove("text-white");e.target.classList.add("text-blue-500")}}>Projects</HashLink>

<HashLink id="lien4" className="text-white font-medium text-xl" to="#skills" onMouseLeave={(e)=>{e.target.classList.remove("text-blue-500");e.target.classList.add("text-white")}} onMouseEnter={(e)=>{e.target.classList.remove("text-white");e.target.classList.add("text-blue-500")}}>Skills</HashLink>
<HashLink id="lien5" className="text-white font-medium text-xl" to="#contact" onMouseLeave={(e)=>{e.target.classList.remove("text-blue-500");e.target.classList.add("text-white")}} onMouseEnter={(e)=>{e.target.classList.remove("text-white");e.target.classList.add("text-blue-500")}}>Contact</HashLink>
</div>

<div>
<AiOutlineMenu className=' text-white sm:hidden md:hidden lg:hidden xl:hidden relative left-5' onClick={()=>{
  if(option===false){setOption(true)}else{setOption(false)}
  }} />


{option===true ? 
<div className='absolute right-0 top-12   w-full  h-40 bg-black rounded-lg pr-5'>
<div className='flex justify-end'>
<FiDelete className='text-white' onClick={()=>{setOption(false)}}/>
</div>
<div className='flex flex-col   items-center  '>
<HashLink onClick={()=>{setOption(false)}} className="text-white hover:bg-purplle hover:text-blue-400 "  to="#home" >Home</HashLink>
<HashLink onClick={()=>{setOption(false)}} className="text-white hover:bg-purplle hover:text-blue-400  " to="#about">About</HashLink>
<HashLink onClick={()=>{setOption(false)}} className="text-white hover:bg-purplle hover:text-blue-400 " to="#services">Services</HashLink>
<HashLink onClick={()=>{setOption(false)}} className="text-white hover:bg-purplle hover:text-blue-400 " to="#projects">Projects</HashLink>

<HashLink onClick={()=>{setOption(false)}} className="text-white hover:bg-purplle hover:text-blue-400 " to="#skills">Skills</HashLink>
<HashLink onClick={()=>{setOption(false)}} className="text-white  hover:bg-purplle hover:text-blue-400 " to="#contact">Contact</HashLink>
</div>
</div> 

: null}

</div>



</div>


<div  className='master mt-10 flex flex-col justify-between   ' onClick={(e)=>{

if(e.target.classList[0]==="master"){


  let path1=document.getElementById("lien1")
  let path2=document.getElementById("lien2")
  let path3=document.getElementById("lien3")
  let path4=document.getElementById("lien4")
  let path5=document.getElementById("lien5")
  
  
  start=40 ;end=0
  index=0
  let u=setInterval(() => {
  
  if(index<5){
  
  switch (index){
  case 0 :
  if(start!==end){
    path1.style.transform=`translateY(${start-5}px)`
    start=start-5
  
  } else{
  index++
  start=40
  
  } 
  
  break;
  case 1 :
    
  if(start!==end){
    path2.style.transform=`translateY(${start-5}px)`
    start=start-5
  
  } else{
  index++
  start=40
  
  } 
  break;
  case 2 :
  
  if(start!==end){
    path3.style.transform=`translateY(${start-5}px)`
    start=start-5
  
  } else{
  index++
  start=40
  
  } 
  break;
  case 3 :
    
  if(start!==end){
    path4.style.transform=`translateY(${start-5}px)`
    start=start-5
  
  } else{
  index++
  start=40
  
  } 
  break;
  case 4 :
    
  if(start!==end){
    path5.style.transform=`translateY(${start-5}px)`
    start=start-5
  
  } else{
  index++
  start=40
  
  } 
  break;
  default : break
  
  }
  
  
  }else{
  
    clearInterval(u)
  }
  
   
  }, 20);


      
}



    }}>


{<Home/>} 
{<About/>} 
{<Services/>} 
{<Projects/>}
{<Skills/>}
{<Contact/>}





<h3 className="mt-5 text-white text-center">all rights reserved @2023</h3>


</div>









</BrowserRouter>

    </div>
  );
}

export default App;
