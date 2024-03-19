import "./about.css"



export default function About(){

    return(

      <div className=" mt-24 ">
    <h1 id="about" className=" text-4xl font-extrabold text-blue-300">About</h1>
<div  className="about mt-10 pr-5 " >





<h3 className="text-white ">LET ME INTRODUCE MYSELF</h3>
<h1 className="text-blue-300 text-3xl font-bold mt-10 ">About Me</h1>
<h2 className="text-white text-2xl mt-4">A story of good</h2>
<p className="text-white text-lg mt-7 " >
I’m a junior front-end developer and like to code in my spare time. Using HTML, CSS, and JavaScript, I have expertise in creating responsive websites. I have also worked with well-known frontend frameworks like React and Vue.js. I prefer to try out new technologies while I’m not working on projects.

I’m skilled in frontend frameworks like React , as well as HTML, CSS, and JavaScript.
<span id="rest" className="hidden">
I have also worked with APIs and am familiar with version control programs like Git. I’m a self-starter who values working in a team as well as alone. I also pay close attention to details and aim to write legible, clean code.

As a front-end developer, I want to advance my knowledge and skills and help create cutting-edge, user-friendly websites. I’m eager to collaborate with a group of driven developers and put my expertise to use in the tech sector.

I love working in between product, engineering and developer experience. Some things that make me excited are JavaScript, Open Source, CI & CD systems, simplicity, automating things and building meaningful user-centric products.
<br/><br/>
I was born and raised in Algeria  next to the mediterranean sea and come from a background of studying Computer Science.
<br/><br/>
Outside of work, I'm obsessed with sports, doing open source and travelling with my family.  
</span>
</p>


<button  id="third" className="
w-32
border-1 
shadow-md 
shadow-blue-500 
bg-purple-900 
text-blue-300 
mt-14"

onClick={(e)=>{

if(document.getElementById("rest").classList.contains("hidden")){
  document.getElementById("rest").classList.remove("hidden")
  e.currentTarget.textContent="Read Less!"

}else{

  document.getElementById("rest").classList.add("hidden")
  
  e.currentTarget.textContent="Read More!"


}



}}

onMouseEnter={(e)=>{e.target.classList.add("before:content:''"
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
  ,"hover:before:scale-x-100","relative","z-100")}}>Read More!</button>


</div>
    
</div>
    )
    
    
    }