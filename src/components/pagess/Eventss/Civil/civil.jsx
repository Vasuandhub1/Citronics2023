import React, { useContext } from "react";
import Navigation from "../../../Navigation bar/navigation";
import Footers from "../../../Footer Bar/Footers";
import img from "./cdgiimg.jpg"
import "./civil.css"
import bg from "./wp2043551.webp"
import { NavLink } from "react-router-dom";
import amount_context from "../../../context/context";

export default function Civil() {

  // calling the cotext elements from context store
  
  const{amount}=useContext(amount_context)
  const{Setamount}=useContext(amount_context)
  const{data}=useContext(amount_context)
  const{Setdata}=useContext(amount_context)

  // var events = [
  //   {
  //     title: "Tic Tac Toe",
  //     dis: "Band war is a term that refers to the rivalry or conflict between two or more musical bands or groups, . ",
  //     price: 2000,
  //     values:0,
  //   },
  //   {
  //       title:"Arc Bridge",
  //       dis:"Open mic is a term that refers to a live show at a venue where anyone can perform on stage.  ",
  //       price:200,
  //       values:0,
  //   },
  //   {
  //       title:"Draw Up",
  //       dis:"Beat the Street is a community-wide programme that encourages people to walk, cycle, .",
  //       price:200,
  //       values:0,
  //   },
  //   {
  //     title:"Bridge Mania",
  //     dis:"Bridge mania is a game",
  //     price:200,
  //     values:0,
  //   }
  // ];

  //  handle event 
   
  const handleadd =(index)=>{
    var temp=[...data]
    temp[index].values=temp[index].values+1
    Setdata(temp)
    Setamount((amount)=>amount+temp[index].price)

  }
  return (
  <div id="comp">
    <div>
    <Navigation/>
    <div id="main" >
    {window.outerWidth<=768?<div id="main">
        <img src={img} alt="error" id="img"/>
        <h1 className="heading">Chameli Devi Group Of Institutions</h1>
        <h2 className="heading">CITRONICS - 2K24</h2>
        <h2 className="heading">Civil</h2>
        </div> : <div id ="main-pc" >
        <img src={img} alt="error" id="img"/>
        <h1 className="heading-pc">Chameli Devi Group Of Institutions</h1>
        <h2 className="heading-pc">CITRONICS - 2K24</h2>
        <h2 className="heading-pc">Civil</h2>
        </div>}
        </div>
        <div id="sec-com">
         <ul id="event">
         {data&& data.map &&data.map((elements,index)=>{
           if(elements.branch==="civil"){return(
            <li key={index}><div className="card text-bg-dark" style={{ width: "21rem"}}>
            <img src={bg} className="card-img" alt="..."/>
            <div className="card-img-overlay">
              <div id="inner-car">
              <h3 className="card-title innertext">{elements.title}</h3>
              <p className="card-text innertext">{elements.dis}</p>
              <h5><p className="card-text innertext">Entry Fee:{elements.price}</p></h5>
              <button type="button" className="btn btn-success" onClick={()=>handleadd(index)} id="button">{elements.values===0?<p>Add...</p> : <p>{elements.values}</p>} </button>
              
              </div>
               
            </div>
          </div> </li>
          )}
            
          })}
         </ul>
        </div>
    <Footers/> 
     </div>
     </div>
  );
}
