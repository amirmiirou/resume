
export default function Skills(){
let start0,end0,start1,end1,start2,end2,start3,end3,start5,end5,start6,end6,start00,end00



    return(
    
    <div className="skills  mt-24 "  >


<h1 id="skills"  className=" text-4xl font-extrabold text-blue-300">Skills</h1>

<div className="mt-5 " onClick={()=>{
let e=document.getElementById("html")
let f=document.getElementById("css")
let g=document.getElementById("js")
let h=document.getElementById("react") 
let i=document.getElementById("node")
let j=document.getElementById("mongo")
let k=document.getElementById("mysql")

let m=document.getElementById("creativity")
let n=document.getElementById("project")
let o=document.getElementById("communication")
e.classList.remove("w-1/2")
f.classList.remove("w-2/5")
g.classList.remove("w-2/5")
h.classList.remove("w-15/18")
i.classList.remove("w-18/1")
j.classList.remove("w-1/18")
k.classList.remove("w-17/16")

m.classList.remove("bg-a")
n.classList.remove("bg-a")
o.classList.remove("bg-c")


start6=1;end6=75
let r6=setInterval(() => {
    
if(start6===end6){
    clearInterval(r6)
}else{

o.style.background=`conic-gradient(#33D7FF ${start6}%,#4A148C ${start6}% ${end6}%)`


start6++

}

}, 10);




start5=1;end5=70
let r5=setInterval(() => {
    
if(start5===end5){
    clearInterval(r5)
}else{

m.style.background=`conic-gradient(#33D7FF ${start5}%,#4A148C ${start5}% ${end5}%)`
n.style.background=`conic-gradient(#33D7FF ${start5}%,#4A148C ${start5}% ${end5}%)`

start5++

}

}, 10);







/*


---------------------------------------------------------
*/




start3=1 ;end3=41
let r3=setInterval(()=>{
if(start3===end3){
clearInterval(r3)
}else{

   
   f.style.width=start3+"%"
   g.style.width=start3+"%"
   j.style.width=start3+"%"
    
    start3++

}

},10)






start2=1 ;end2=36
let r2=setInterval(()=>{
if(start2===end2){
clearInterval(r2)
}else{

   
   h.style.width=start2+"%"
   
   
    
    start2++

}

},10)


start1=1 ;end1=61
let r1=setInterval(()=>{
if(start1===end1){
clearInterval(r1)
}else{

   
   
   
   i.style.width=start1+"%"
    
    start1++

}

},10)


 start0=1 ;end0=56
let r=setInterval(()=>{
if(start0===end0){
clearInterval(r)
}else{

    
    k.style.width=start0+"%"
    
    start0++

}

},10)

start00=1 ;end00=51
let r64=setInterval(()=>{
if(start00===end00){
clearInterval(r64)
}else{

    
    e.style.width=start00+"%"
    
    start00++

}

},10)

}}>

    
<h2 className="text-white mt-7  ">TECHNICAL AND PROFESSIONAL</h2>
<h1 className="text-blue-500 font-bold text-xl mt-4 ">My Skills</h1>

<div className="  mt-10  ">

<div className="">
<h2 className="text-white ">Technical Skills</h2>
<div className="mt-5">
<div>
<div className=" xl:w-3/4 lg:w-3/4 md:w-3/4 sm:w-3/4 w-full   flex flex-row justify-between ">
<h3 className="text-white">HTML</h3>
<h3 className="text-white">50%</h3>
</div>
<div  className="bg-purple-800    h-2 rounded-lg xl:w-3/4 lg:w-3/4 md:w-3/4 sm:w-3/4 w-full  ">
<div id="html" className="w-1/2 bg-blue-400 h-2 "></div> 
</div>
</div>

<div className="mt-5">
<div className="xl:w-3/4 lg:w-3/4 md:w-3/4 sm:w-3/4 w-full  flex flex-row justify-between ">
<h3 className="text-white">CSS</h3>
<h3 className="text-white">40%</h3>
</div>
<div  className="bg-purple-800  h-2 rounded-lg xl:w-3/4 lg:w-3/4 md:w-3/4 sm:w-3/4 w-full ">
    <div id="css" className="w-2/5 bg-blue-400 h-2 "></div> 
</div>
</div>

<div  className="mt-5">
<div className="xl:w-3/4 lg:w-3/4 md:w-3/4 sm:w-3/4 w-full  flex flex-row justify-between ">
<h3 className="text-white">JAVASCRIPT</h3>
<h3 className="text-white">40%</h3>
</div>
<div className="bg-purple-800   xl:w-3/4 lg:w-3/4 md:w-3/4 sm:w-3/4 w-full  h-2 rounded-lg ">
    <div id="js" className="w-2/5 bg-blue-400 h-2 "></div> 
</div>
</div>

<div  className="mt-5">
<div className="xl:w-3/4 lg:w-3/4 md:w-3/4 sm:w-3/4 w-full  flex flex-row justify-between ">
<h3 className="text-white">REACT JS</h3>
<h3 className="text-white">35%</h3>
</div>
<div className="bg-purple-800   xl:w-3/4 lg:w-3/4 md:w-3/4 sm:w-3/4 w-full  h-2 rounded-lg ">
<div id="react" className="w-15/18 bg-blue-400 h-2 "></div> 

</div>
</div>

<div  className="mt-5">
<div className="xl:w-3/4 lg:w-3/4 md:w-3/4 sm:w-3/4 w-full  flex flex-row justify-between ">
<h3 className="text-white">NODE JS</h3>
<h3 className="text-white">60%</h3>
</div>
<div className=" bg-purple-800   xl:w-3/4 lg:w-3/4 md:w-3/4 sm:w-3/4 w-full  h-2 rounded-lg ">
    <div id="node" className="w-18/1 bg-blue-400 h-2 "></div> 
</div>

</div>

<div  className="mt-5">
<div className="xl:w-3/4 lg:w-3/4 md:w-3/4 sm:w-3/4 w-full  flex flex-row justify-between ">
<h3 className="text-white">MONGO DB</h3>
<h3 className="text-white">40%</h3>
</div>
<div className="bg-purple-800  xl:w-3/4 lg:w-3/4 md:w-3/4 sm:w-3/4 w-full  h-2 rounded-lg ">
    <div id="mongo" className="w-2/5 bg-blue-400 h-2 "></div> 
</div>
</div>


<div  className="mt-5">
<div className="xl:w-3/4 lg:w-3/4 md:w-3/4 sm:w-3/4 w-full  flex flex-row justify-between ">
<h3 className="text-white">MYSQL</h3>
<h3 className="text-white">55%</h3>
</div>
<div className="bg-purple-800   xl:w-3/4 lg:w-3/4 md:w-3/4 sm:w-3/4 w-full  h-2 rounded-lg ">
    <div id="mysql" className="w-17/16 bg-blue-400 h-2 "></div> 
</div>
</div>
</div>
</div>

<div className=" mt-11">

<h2 className="text-white  ">Professional Skills</h2>
<div className="flex flex-row justify-between flex-wrap mt-3 pt-5 pr-5">




<div className="mr-6 mb-10">
<div id="creativity" className="
xl:w-52 lg:w-52 md:w-52 sm:w-52 w-32 
h-52  
rounded-full
bg-a
flex flex-col justify-center items-center" >
<div className="xl:w-48 lg:w-48 md:w-48 sm:w-48 w-28 flex flex-col justify-center items-center h-48
 bg-purple-900
 rounded-full
 border
 border-slate-500"><h2 className=" text-white">70%</h2></div>
</div>
<p className=" text-center text-white pt-3">Creativity</p>
</div>





<div className="mr-6 mb-10 ">
<div id="communication" className="
xl:w-52 lg:w-52 md:w-52 sm:w-52 w-32
h-52  
rounded-full
bg-c
flex flex-col justify-center items-center " >
<div className="xl:w-48 lg:w-48 md:w-48 sm:w-48 w-28 flex flex-col justify-center items-center h-48
 bg-purple-900
 rounded-full
 border
 border-slate-500"> <h2 className=" text-white">75%</h2></div> 
</div>
<p className=" text-center text-white pt-3">Communication</p>
</div>


<div>
<div id="project" className="
xl:w-52 lg:w-52 md:w-52 sm:w-52 w-32
h-52  
rounded-full
bg-a
flex flex-col justify-center items-center  " >
<div className="xl:w-48 lg:w-48 md:w-48 sm:w-48 w-28 flex flex-col justify-center items-center h-48
 bg-purple-900
 rounded-full
 border
 border-slate-500"> <h2 className=" text-white">70%</h2></div>
</div>
<p className=" text-center text-white pt-3">Project Management</p>
</div>

</div>

</div>


    </div>
    </div>
    
    </div>
    
    
    )
    
    
    }