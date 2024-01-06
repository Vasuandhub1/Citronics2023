import React from "react";
import Navigation from "../../../Navigation bar/navigation";
import Footers from "../../../Footer Bar/Footers";
import img from "./cdgiimg.jpg"
import "./management.css"
import bg from "./1600px_COLOURBOX14902358.jpg"
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import amount_context from "../../../context/context";
import Viewcart from "../../../viewcart/viewcart";
export default function Management() {

  // calling the context elements
  const {amount}=useContext(amount_context)
  const{Setamount}=useContext(amount_context)
  const{data}=useContext(amount_context)
  const{Setdata}=useContext(amount_context)


  // var events = [
  //   {
  //     title: "Snakes and Ladder",
  //     dis: "Band war is a term that refers to the rivalry or conflict between two or more musical bands or groups, . ",
  //     price: 2000,
  //   },
  //   {
  //       title:"master Chef",
  //       dis:"Open mic is a term that refers to a live show at a venue where anyone can perform on stage.  ",
  //       price:200
  //   },
  //   {
  //       title:"Ramp Walk",
  //       dis:"Beat the Street is a community-wide programme that encourages people to walk, cycle, .",
  //       price:200
  //   },
  //   {
  //     title:"Treasure Hunt",
  //     dis:"In this game we have to fing the treasure chest",
  //     price:400
  //   }
  // ];

  // handeling the add button 
  const handleadd = (index)=>{
    var temp=[...data]
    temp[index].values=temp[index].values+1
    Setdata(temp)
    Setamount((amount)=>amount+temp[index].price)
  }
  return (
    <div>
    <div id="header"><Navigation></Navigation></div>
    <div id="middel">
        <div className="inte-head">
          <h1 className="inte-head">Chameli Devi Group Of Institutions</h1>
        <h2 className="inte-head">CITRONICS - 2K24</h2>
        <h3 className="inte-head">Management</h3></div>
        </div>
        <div id="content">
          <ul id="event">
            {data.map((elements,index)=>{
              if(elements.branch==="management"){
                return(<li key={index} id="list-item"><div className="card text-bg-dark"  id ="main-card"style={{ width: "18rem"}}>
                <img src={bg} className="card-img" alt="..." />
                <div className="card-img-overlay">
                  <div id="inner-car">
                  <h3 className="card-title innertext">{elements.title}</h3>
                  <p className="card-text innertext">{elements.dis}</p>
                  </div>
                  <div id="buttons">
                  <h5><p className="card-text innertext">Entry Fee:{elements.price}</p></h5>
                  <button type="button" className="btn btn-success" onClick={()=>handleadd(index)} id="button">{elements.values===0?<p>Add...</p> : <p>{elements.values}</p>} </button>
                  </div>
                </div>
              </div> </li>)
              }
            })}
          </ul>
          {amount!=0?<div id="viewcart"><Viewcart/></div>:<p></p>}
        </div>
    <div id="footer">
      <Footers></Footers>
    </div>
  </div>
  );
}
