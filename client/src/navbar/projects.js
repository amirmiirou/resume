
import a from "../images/download.png"
import b from "../images/download (1).png"
import c from "../images/download (2).png"
import d from "../images/download (4).png"

export default function Projects(){




    return(
    
    
    <div  id="projects" className="mt-24 pr-5" >
       <h1 id="about" className=" text-4xl font-extrabold text-blue-300">Projects</h1>
       <div className="flex justify-between items-start pt-20 gap-10 flex-wrap ">


<div className="flex flex-col items-center gap-5 ">
    <img className="w-96 h-52" src={a} alt="a"/>
    <button className="w-32
border-1 
shadow-md 
shadow-blue-500 
bg-purple-900 
text-blue-300 
" onClick={()=>{window.open("https://password-manager-client-one.vercel.app/")}}>visit site</button>
</div>



<div className=" flex flex-col items-center gap-5 ">
<img className="w-96 h-52" src={b} alt="b"/>
    <button  onClick={()=>{window.open("https://tic-tac-toe-theta-rust.vercel.app/")}} className="w-32
border-1 
shadow-md 
shadow-blue-500 
bg-purple-900 
text-blue-300 
">visit site</button>
</div>


<div className=" flex flex-col items-center gap-5 ">
    <img className="w-96 h-52" src={d} alt="e"/>
    <button onClick={()=>{window.open("https://amirmiirou.github.io/antic/")}} className="w-32
border-1 
shadow-md 
shadow-blue-500 
bg-purple-900 
text-blue-300 
">visit site</button>
</div>


<div className=" flex flex-col items-center gap-5 ">
<img className="w-96 h-52" src={c} alt="s"/>
    <button onClick={()=>{window.open("https://quiz-kappa-woad.vercel.app/")}} className="w-32
border-1 
shadow-md 
shadow-blue-500 
bg-purple-900 
text-blue-300 
">visit site</button>
</div>




       </div>


    </div>
    
    
    )
    
    
    }