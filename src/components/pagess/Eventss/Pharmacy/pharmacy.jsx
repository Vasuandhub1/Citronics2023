import React, { useContext } from "react";
import Navigation from "../../../Navigation bar/navigation";
import Footers from "../../../Footer Bar/Footers";
import img from "./cdgiimg.jpg"
import "./pharmacy.css"
import bg from "./wp1931784.jpg"
import { NavLink } from "react-router-dom";
import amount_context from "../../../context/context";
import Viewcart from "../../../viewcart/viewcart";
export default function Pharmacy() {
  // calling the context elemsnts
  const{amount}=useContext(amount_context)
  const{Setamount}=useContext(amount_context)
  const{data}=useContext(amount_context)
  const{Setdata}=useContext(amount_context)
  // var events = [
  //   {
  //     title: "Musical Chair",
  //     dis: "Band war is a term that refers to the rivalry or conflict between two or more musical bands or groups, . ",
  //     price: 2000,
  //   },
  //   {
  //       title:"Pass The Wire",
  //       dis:"Open mic is a term that refers to a live show at a venue where anyone can perform on stage.  ",
  //       price:200
  //   },
  //   {
  //       title:"Selfie Booth",
  //       dis:"Beat the Street is a community-wide programme that encourages people to walk, cycle, .",
  //       price:200
  //   },
  //   {
  //     title:"Lips Dont Lie",
  //     dis:"catch the lier in thie game",
  //     price:50
  //   }
  // ];

  const handleadd =(index)=>{
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
        <h3 className="inte-head">Pharmacy</h3></div>
        </div>
        <div id="content">
          <ul id="event">
            {data.map((elements,index)=>{
              if(elements.branch==="pharmacy"){
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
