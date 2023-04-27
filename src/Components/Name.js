import React from 'react'
import './Name.css'

const Name = () => {

    const Text  =()=>
    {
        document.getElementById("text1").innerHTML=" No I AM A LORD VORDEMORT"
        document.getElementById("text").innerHTML=""
    }
  return (
    <div>
        <h2>Who Are you</h2>

        <h3 id="text">My Name is Tom Ridle</h3><br /><br />
        <h3 id="text1"></h3><br /><br />
        <button onMouseUp={Text}> Check real Name</button>
        {/* <button on={Text}> Check real Name</button> */}
        <br /><br />
      
    </div>
  )
}

export default Name
