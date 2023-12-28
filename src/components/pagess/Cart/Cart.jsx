import React, { useContext } from "react";
import './Cart.css'; // Make sure the CSS file extension is correct
import { NavLink } from "react-router-dom";
import amount_context from "../../context/context";
import cardimg from "./resources/413893816_881089357137408_3781618569609655013_n.jpg"

function Cart() {
  // calling the context elements 
  const{amount}=useContext(amount_context) 
  const{Setamount}=useContext(amount_context)
  const{data}=useContext(amount_context)
  const {Setdata}=useContext(amount_context)
  // managinig function
  const handleremove=(index)=>{
    var temp=[...data]
    temp[index].values-=1
    Setdata(temp)
    Setamount((amount)=>amount-temp[index].price)
  }
  var tikit=0
  data.map((elements,index)=>{
    if(elements.values!=0){
      tikit+=elements.values
    }
  })
  return (
    <>
      <div className="cart_section"> {/* Use className instead of class in React */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="cart_container">
                <div className="cart_title">Shopping Cart<small> ({tikit}) </small></div>
                {data.map((element,index)=>{
                  if(element.values!=0){
                    return(
                      <div className="cart_items">
                  <ul className="cart_list">
                    <li className="cart_item clearfix">
                      <div className="cart_item_image"><img src={cardimg} alt=""/></div>
                      <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                        <div className="cart_item_name cart_info_col">
                          <div className="cart_item_title">Name</div>
                          <div className="cart_item_text">{element.branch}</div>
                        </div>
                        <div className="cart_item_color cart_info_col">
                          <div className="cart_item_title">Remove</div>
                          <button type="button" class="btn btn-outline-danger" onClick={()=>handleremove(index)}>Remove</button>
                        </div>
                        <div className="cart_item_quantity cart_info_col">
                          <div className="cart_item_title">Quantity</div>
                          <div className="cart_item_text">{element.values}</div>
                        </div>
                        <div className="cart_item_price cart_info_col">
                          <div className="cart_item_title">Price</div>
                          <div className="cart_item_text">₹{element.price}</div>
                        </div>
                        <div className="cart_item_total cart_info_col">
                          <div className="cart_item_title">Event</div>
                          <div className="cart_item_text">{element.title}</div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                    )
                  }
                })}
                <div className="order_total">
                  <div className="order_total_content text-md-right">
                    <div className="order_total_title">Order Total:</div>
                    <div className="order_total_amount">₹{amount}</div>
                  </div>
                </div>
                <div className="cart_buttons">
                  <NavLink type="button" className="button cart_button_clear" to="/" style={{textDecoration:"none"}}>Continue Shopping</NavLink>
                  <NavLink  className=" button cart_button_clear" to="/registration"  style={{textDecoration:"none"}}>Register Here...</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
