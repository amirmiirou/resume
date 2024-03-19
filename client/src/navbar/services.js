import Graphic from "../images/graphic.png"
import FullStack from "../images/full stack.png"
import DataBases from "../images/databases.png"
import Network from "../images/network.png"
export default function Services(){

    return(
    
    <div  className="services mt-24   " > 
<h1 id="services" className=" text-4xl font-extrabold text-blue-300 ">Services</h1>
<div className="mt-5">
    
    <h2 className="text-white text-base mt-10 ">WHAT I WILL DO FOR YOU</h2>
    <h1 className="text-blue-400  text-xl font-bold mt-7 ">Our Services</h1>


    <div className="
    mt-5 flex flex-row flex-grow justify-between flex-wrap pr-5
    
    
    ">

<div className=" xl:w-60 lg:w-60 md:w-60 sm:w-60 w-4/5 mb-6  flex flex-col  items-center border-2 border-blue-500 shadow-blue-500 shadow-lg rounded-md">
<img src={Graphic} alt="graphic design" className="w-32 h-32"  /> 
<h1 className="text-white text-lg font-bold">Graphic Designs</h1>
<p className="text-white h-32">
create visual communications such
as adverts, branding, publicity
materials and magazine layouts.
</p>

 </div>


<div className="xl:w-60 lg:w-60 md:w-60 sm:w-60 w-4/5 mb-6 flex flex-col  items-center border-2 border-blue-500 shadow-blue-500 shadow-lg rounded-md">
<img src={FullStack} alt="full stack development" className="w-32 h-32" /> 
<h1 className="text-white text-lg font-bold">Full Stack Development</h1> 
<p className="text-white h-32">
work on both operations front- and
back-end on websites and computer
systems.    
</p>

</div>



<div className="xl:w-60 lg:w-60 md:w-60 sm:w-60 w-4/5   mb-6 flex flex-col  items-center border-2 border-blue-500 shadow-blue-500 shadow-lg rounded-md">
<img src={DataBases} alt="databases" className="w-32 h-32"  /> 
<h1 className="text-white text-lg font-bold">DataBases</h1>
<p className="text-white h-32">
managing access to systems that
store company information and
else.    
</p>

</div>




<div className="xl:w-60 lg:w-60 md:w-60 sm:w-60 w-4/5   mb-6  flex flex-col  items-center border-2 border-blue-500 shadow-blue-500 shadow-lg rounded-md">
<img src={Network} alt="network" className="w-32 h-32"  /> 
<h1 className="text-white text-lg font-bold">Networks</h1>
<p className="text-white h-32">
installing and configuring computer
networks and systems.

</p>

</div>
   
   
   
    </div>

    </div>
    </div>
    
    
    )
    
    
    }