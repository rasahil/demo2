import React, { useState }  from 'react'
import './FunctionClick.css'


const FunctionClick = () => {
    
    const purple = "#22sds2"
    const [bg, setBg] = useState(purple);
   
    const bgChange = () => {
        let bgClr ='#00FFCA';
        document.getElementById("output1").innerHTML="cyan"
        setBg(bgClr);
        
    };

    const bgBack = () => {
        let bgClr ='purple';
        document.getElementById("output1").innerHTML="Purple"
        setBg(bgClr);
        
    };
  
    
    function clickHandler(){
        console.log("Button clicked")
        document.getElementById('img').src="./img1.webp"
        document.getElementById("output").innerHTML="Button is Clicked"
    }

    function imgHide(){
        console.log("Button clicked")
        document.getElementById('img').src=""
        document.getElementById("output").innerHTML="Image is Hidden"
    }
    
    function clickHandler1(){
        console.log("Button clicked here")
        document.getElementById("output1").innerHTML="Dark purple"
        let bgClr ='#210062';
        setBg(bgClr);
        
    }

  return (
    <div style={ { backgroundColor: bg}}>
      <img id='img' alt="" height={400} /><br />
      <button onClick={clickHandler} onDoubleClick={imgHide} >Click</button>
      <p id="output"></p>
      
      <p id="output1"></p>
     <div className='btn d-fle'>
        <button onClick={bgChange} onDoubleClick={bgBack}>CYAN </button>&emsp;
            
        <button onClick={clickHandler1} onDoubleClick={bgBack}>Dark Purple </button>
     </div>
      


      
     
    </div>
  )
}

export default FunctionClick
