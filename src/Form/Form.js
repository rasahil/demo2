import { useState } from "react"
import './Form.css'
const Form = () => {
    const [name, setName] = useState(false);
    const[namev,setNamev] = useState("")
    const [email, setEmail] = useState(false);
    const [emailv,setEmailv]=useState("")
    const [pass ,setPass]=useState(false)
    const [passv ,setPassv]=useState("")
    const [number ,setNumber]=useState(false)
    const [numberv ,setNumberv]=useState("")
    const [gender,setGender]=useState(null)


  

    // const handleSubmit = (Event) ={
    // //   Event.preventDefault();
    // }
  const HandleChange= (e)=>{
  let na=(e.target.value)
   if(na.length <="3"){
    setName(true)
   }
   else{
    setName(false)
   }
   setNamev(na)

  }
  const HandleChangeone= (e)=>{
    let ema=e.target.value
    if(ema.indexOf('@') <= 0 )  // for @ is not first letter
    {
      setEmail(true)
    }
    else{
      setEmail(false)
    }
    setEmailv(ema)

    }
    const HandleChangetwo=(e)=>{
    let  Pas=e.target.value
    if(Pas.length<="5"){
      setPass(true)
    }
    else{
      setPass(false)
    }
    setPassv(Pas)
  }

  const handelChangethree=(e)=>{
let num = e.target.value
if(num.length < 10 || num.length>10){
  setNumber(true)
}
else{
  setNumber(false)
}
setNumberv(num)
  }

const handleChangefour = (e) =>{
setGender(e.target.value)



}

  const hadleSubmit =(e)=>{
   e.preventDefault()
     if(namev==="" || emailv.indexOf('@') <= 0 || passv.length<="5" ||numberv.length < 10 || numberv.length>10){
      alert("fill the form first")
     }
     if(gender==null){
      document.getElementById("gend").innerHTML="select the gender"
    }
    else{
      document.getElementById("gend").innerHTML=""
    
    }
     
  }

    
  return (
    <div className="container-fluid ">
        <div className=" row ">
        <div className="col-6" >
            <img src="./register.webp" hidden alt="sef" width="600px" />
            <h2>Register Here</h2>
        </div>
    
        <div className="col-6">

        <form onSubmit={hadleSubmit}>
            <label htmlFor="">Name :- </label>
            <input className="form-control" onChange={HandleChange} type="text" />
            <p >{name ? "enter valid name":""}</p>

            <label htmlFor="">Email :- </label>
            <input className="form-control" onChange={HandleChangeone}   type="text" />
            <p>{email ? "enter valid mail" : ""}</p>
            <label htmlFor="">Password :- </label>
            <input className="form-control"  onChange={HandleChangetwo}  type="password" placeholder="**********" />
            <p>{pass ? "enter valid password": ""}</p>
            <label htmlFor="">Number :- </label>
            <input className="form-control" onChange={handelChangethree} type="number" />
            <p>{number ? "Enter Valid No":""}</p>
            <label htmlFor="">male </label>
            <input type="radio" name="gender" value={gender==="male"} onChange={handleChangefour}/>
            <label htmlFor="">female </label>
            <input type="radio" name="gender" value={gender==="female"} onChange={handleChangefour} />
            <p id="gend"></p>
            <center>
            <button className="form-control" type="submit">Submit</button> 
            </center>
        </form>
        </div>
        </div>
    </div>
  )
}
export default Form