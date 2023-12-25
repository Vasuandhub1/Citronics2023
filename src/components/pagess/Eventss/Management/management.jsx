import React from "react";
import Navigation from "../../../Navigation bar/navigation";
import Footers from "../../../Footer Bar/Footers";
import img from "./cdgiimg.jpg"
import "./management.css"
import bg from "./1600px_COLOURBOX14902358.jpg"
import { NavLink } from "react-router-dom";
export default function Management() {
  var events = [
    {
      title: "Snakes and Ladder",
      dis: "Band war is a term that refers to the rivalry or conflict between two or more musical bands or groups, . ",
      price: 2000,
    },
    {
        title:"master Chef",
        dis:"Open mic is a term that refers to a live show at a venue where anyone can perform on stage.  ",
        price:200
    },
    {
        title:"Ramp Walk",
        dis:"Beat the Street is a community-wide programme that encourages people to walk, cycle, .",
        price:200
    },
    {
      title:"Treasure Hunt",
      dis:"In this game we have to fing the treasure chest",
      price:400
    }
  ];
  return (
  <div id="comp">
    <div>
    <Navigation/>
    <div id="main" >
    {window.outerWidth<=768?<div id="main">
        <img src={img} alt="error" id="img"/>
        <h1 className="heading">Chameli Devi Group Of Institutions</h1>
        <h2 className="heading">CITRONICS - 2K24</h2>
        <h2 className="heading">Management Events</h2>
        </div> : <div id ="main-pc" >
        <img src={img} alt="error" id="img"/>
        <h1 className="heading-pc">Chameli Devi Group Of Institutions</h1>
        <h2 className="heading-pc">CITRONICS - 2K24</h2>
        <h2 className="heading-pc">Management Events</h2>
        </div>}
        </div>
        <div id="sec-com">
         <ul id="event">
          {events.map((elements,index)=>{
            return(
              <li key={index}><div class="card text-bg-dark" style={{ width: "21rem"}}>
              <img src={bg} class="card-img" alt="..."/>
              <div class="card-img-overlay">
                <div id="inner-car">
                <h3 class="card-title" className="innertext">{elements.title}</h3>
                <p class="card-text" className="innertext">{elements.dis}</p>
                <h5><p class="card-text" className="innertext">price:{elements.price}</p></h5>
                <NavLink className="btn btn-outline-warning" to="/registration" id="button">Register...</NavLink>
                </div>
                 
              </div>
            </div></li>
            )
          })}
         </ul>
        </div>
    <Footers/> 
     </div>
     </div>
  );
}
