/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {





    extend: {

      
        
        backgroundColor : {'purplle':'#950CE8'}
,


    transitionDuration : {

'10000':'10s'

    },

  backgroundImage :{

'a':'conic-gradient(#33D7FF 260deg,#4A148C 260deg 360deg)',
'b':'conic-gradient(#33D7FF 290deg,#4A148C 290deg 360deg)',
'c':'conic-gradient(#33D7FF 275deg,#4A148C 275deg 360deg)'



  },
borderRadius : {
'50':"50%"

},
      
borderWidth:{

"9":"20px"

},
  zIndex: {
    '100':'100',
    '200':'-100'},
  width : {
    '97':'600px',
  '9/10':'90%',
'15/18':'35%',
'17/16':'55%',
'1/18':'30%',
'18/1':'60%'

  },

  height :{
    
    '120':'625px',

    '97' : '460px',


    '123123':'593px', 
   
    '150':'650px',

    '180' : '670px',

    '200' : '750px',


    '300':'1200px'
  
  },
  animation : {

    amir :'amir 10s ease-in-out  ',
    
    

  },

  keyframes : {
  
    amir : {

'0%' : {transform : 'rotateZ(5deg)'},
'100%' : {transform : 'rotateZ(-5deg)'},



    },




  
    


  }
  
  





    },
  },
  plugins: [],
}

