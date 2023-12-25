import React from "react";
import Navigation from "../../../Navigation bar/navigation";
import Footers from "../../../Footer Bar/Footers";
import img from "./cdgiimg.jpg"
import "./entertainment.css"
import bg from "./o.jpg"
import { NavLink } from "react-router-dom";
export default function Entertainment() {
  var events = [
    {
      title: "Band War",
      dis: "Band war is a term that refers to the rivalry or conflict between two or more musical bands or groups, . ",
      price: 2000,
    },
    {
        title:"Open Mic",
        dis:"Open mic is a term that refers to a live show at a venue where anyone can perform on stage.  ",
        price:200
    },
    {
        title:"Beat the Street",
        dis:"Beat the Street is a community-wide programme that encourages people to walk, cycle, .",
        price:200
    },
    {
        title:"Dance",
        dis:"Dance is an art form that involves the movement of the body in a rhythmic way, usually to music and within a given space,",
        price:300
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
        <h2 className="heading">Entertainments Events</h2>
        </div> : <div id ="main-pc" >
        <img src={img} alt="error" id="img"/>
        <h1 className="heading-pc">Chameli Devi Group Of Institutions</h1>
        <h2 className="heading-pc">CITRONICS - 2K24</h2>
        <h2 className="heading-pc">Entertainments Events</h2>
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
                <NavLink className="btn btn-outline-warning" to="/" id="button">Register...</NavLink>
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
