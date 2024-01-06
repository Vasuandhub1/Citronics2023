import React, { useContext } from "react";
import "./viewcart.css";
import amount_context from "../context/context";
import img from "./413893816_881089357137408_3781618569609655013_n.jpg"
import { NavLink } from "react-router-dom";
function Viewcart() {
  const{amount}=useContext(amount_context);
  const{data}=useContext(amount_context);
  var total=0;
  data.map((elements)=>{
    total+=elements.values;
  })
  return (
    <>
      <div id="cartview-container">
        <div className="vicard">
          <div className="row main align-items-center">
            <div className="col-2">
              <img
                className="img-fluid"
                src={img}
                alt="citronics"
              />
            </div>
            <div className="col">
              <div className="row text-muted">Event Pass</div>
              <div className="row text-muted">Total: x{total}</div>
            </div>

            <div className="col">Rs.{amount}</div>

            <div className="col">
              <NavLink  className="btn btn-danger" to="/cart">
                viewcart
              </NavLink>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
export default Viewcart;
