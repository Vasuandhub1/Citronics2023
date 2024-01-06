import React, { useContext } from "react";
import "./Aboutus.css";
import bg from "./cdgiimg.jpg";
import Footers from "../Footer Bar/Footers";
import Navigation from "../Navigation bar/navigation";
import amount_context from "../context/context";
import Viewcart from "../viewcart/viewcart";
export default function Aboutus(){
  const{amount}=useContext(amount_context);
  return (
    <div>
    <div id="header"><Navigation></Navigation></div>
    <div id="middel">
        <div className="inte-head">
          <h1 className="inte-head">Chameli Devi Group Of Institutions</h1>
        <h2 className="inte-head">CITRONICS - 2K24</h2>
        <h3 className="inte-head">About US</h3></div>
        </div>
        <div id="content">
          <p>CITRONICS, the annual national level techno management fest of CDGI is
              organized every year with a sole intention of providing an impetus to
              the talented minds of engineering and management students with an
              opportunity to showcase their professional brilliance. Citronics provide
              the right platform for students to showcase their prowess and compete
              not only at the state level but also with students at the national level.
              Number of high profile events like Robotics, Civil Engineering,
              Mechatronics, Software, and Management are organized in Citronics.</p>
          {amount!=0?<div id="viewcart"><Viewcart/></div>:<p></p>}
        </div>
    <div id="footer">
      <Footers></Footers>
    </div>
  </div>
  );
};
