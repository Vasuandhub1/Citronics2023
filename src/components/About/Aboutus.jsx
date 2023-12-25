import React from "react";
import "./Aboutus.css";
import bg from "./cdgiimg.jpg";
import Footers from "../Footer Bar/Footers";
import Navigation from "../Navigation bar/navigation";
export default function Aboutus(){
  return (
    <>
    <Navigation/>
    <div id="imag">
      <div id="container">
        <img src={bg} alt="" id="clgbg" />
        
        
        {window.outerWidth <= 786 ? (
          <>
            <div id="title-media">CITRONICS 2K24</div>
            <div id="text-media">
              CITRONICS, the annual national level techno management fest of CDGI is
              organized every year with a sole intention of providing an impetus to
              the talented minds of engineering and management students with an
              opportunity to showcase their professional brilliance. Citronics provide
              the right platform for students to showcase their prowess and compete
              not only at the state level but also with students at the national level.
              Number of high profile events like Robotics, Civil Engineering,
              Mechatronics, Software, and Management are organized in Citronics.
            </div>
          </>
        ) : (
          <>
            <div id="title-pc">CITRONICS 2K24</div>
            <div id="text-pc">
              CITRONICS, the annual national level techno management fest of CDGI is
              organized every year with a sole intention of providing an impetus to
              the talented minds of engineering and management students with an
              opportunity to showcase their professional brilliance. Citronics provide
              the right platform for students to showcase their prowess and compete
              not only at the state level but also with students at the national level.
              Number of high profile events like Robotics, Civil Engineering,
              Mechatronics, Software, and Management are organized in Citronics.
            </div>
          </>
        )}
      </div>
      <Footers/>
    </div>
    </>
  );
};
