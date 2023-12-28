import React, { useContext } from 'react';
import './Registration.css';
import Navigation from '../../Navigation bar/navigation';
import Footers from '../../Footer Bar/Footers';
import amount_context from '../../context/context';
import { NavLink } from 'react-router-dom';

function Registration() {
  // calling the context elements
  const{data}=useContext(amount_context)
  const{amount}=useContext(amount_context)
  var titles=[]
  data.map((elements,index)=>{
    if(elements.values!=0){
      titles.push(elements.title)
    }
  })
  return (

    <>
    <Navigation></Navigation>
    <div id='container'>
   
    <div className="form">

      <div className="form-body">
       <h1>REGISTER</h1>
        <div className="name">
          <label className="form__label" htmlFor="fullName">
            Full Name
          </label>
          <input className="form__input" type="text" id="fullName" placeholder="Full Name" />
        </div>
        <div className="gender">
          <label className="form__label"  >Gender</label>
          <label>
          <select className="form__input" id="gendervalue" defaultValue="">
    <option value="" >Select Gender</option>
    <option value="entertainment">Male</option>
    <option value="mechanical"> Female</option>
    <option value="management">Other</option>
  </select>
            </label>
        </div>
        <div className="email">
          <label className="form__label" htmlFor="email">
            Email
          </label>
          <input type="email" id="email" className="form__input" placeholder="Email" />
        </div>
        <div className="number">
          <label className="form__label" htmlFor="phoneNumber">
            Phone Number
          </label>
          <input type="tel" id="phoneNumber" className="form__input" placeholder="Phone Number" />
        </div>
        <div className="branch">
          <label className="form__label" htmlFor="branch">
            Branch
          </label>
          <input type="text" id="branch" className="form__input" placeholder="Branch" />
        </div>
        <div className="sem">
          <label className="form__label" htmlFor="semester">
            Semester
          </label>
          <input type="text" id="semester" className="form__input" placeholder="Semester" />
        </div>
        <div className="event-domain">
  <label className="form__label" htmlFor="eventdomain">
    Selected Events
  </label>
  {/* <select className="form__input" id="eventdomain" defaultValue="">
    <option value="" disabled>Select Event</option>
    <option value="entertainment">Entertainment</option>
    <option value="mechanical">Mechanical</option>
    <option value="management">Management</option>
    <option value="civil">Civil</option>
    <option value="robotics">Robotics</option>
    <option value="enterprenurship">Enterprenurship</option>
    <option value="pharmacy">Pharmacy</option>
    <option value="software">Software</option>
    <option value="onSpotEvent">On Spot Event</option>
    <option value="sports">Sports</option>
    <option value="advanterousEvents">Advanterous Events</option>
    <option value="management2">Managemengt</option>
    <option value="photography">Photography</option>
    <option value="nationalQuiz">National Quiz</option>
  </select> */}
  <input type="text" id="semester" className="form__input" placeholder="Semester" value={[...titles]} />
</div>
<div className="eventname">
          <label className="form__label" htmlFor="eventname">
            Total  Payable Amount
          </label>
          <input type="text" id="eventname" className="form__input" placeholder="Event Name" value={`₹ ${amount}`} />
        </div>
        
      </div>
      <div className="footer">
        {amount===0? <NavLink className="btns" to="/" style={{textDecoration:"none", paddingLeft:"50px",paddingRight:"50px"}}>Select Any Event</NavLink>:<button type="submit" className="btns">
           'Continue To Pay'
        </button>}
      </div>
    </div>
    </div>
    <Footers></Footers>
    </>
  );
}

export default Registration;
