import React from 'react'
import logo from './tony.jpg';
import './Card.css'

const Card = () => {
  return (
    <div>
      <center>
        <h2 className="App">
          <div className="upper-container">
            <p className='header'>Axiom Tech Guru Pvt.Ltd.</p>
            <div className="image-container">
              <img src={logo} alt="" height="120px" width="120px"  />
            </div>
          </div>
          <div className="lower-container">
            <h3> Name :- <span>Tony Stark</span></h3>
            <h4> Job title :- <span> S/w Developer</span> </h4>
            <p> Date of Birth :- <span>31-Dec-2000</span> </p>
            <p> Address :- <span>At Post Umari (wagh)</span> </p>
            {/* <table>
              <tr>
                <td>Name :-</td><td>Tony Stark</td>
              </tr>
              <tr>
              <td>Job title :-</td><td>S/w Developer</td>
              </tr>
              <tr>
              <td>Date of Birth :-</td><td>31-Dec-2000</td>
              </tr>
              <tr>
              <td>Address :-</td><td>At Post Umari (wagh)</td>
              </tr>
            </table> */}
          </div>
        </h2>
      </center>
    </div>
  )
}

export default Card
