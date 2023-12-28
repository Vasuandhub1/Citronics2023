import React from "react";
import "./home.css";
import Navigation from "../../Navigation bar/navigation";
import background from "./resources/Reelvideo-42046.mp4";
import entertainment from "./resources/o.jpg";
import mechanical from "./resources/154900.jpg";
import management from "./resources/1600px_COLOURBOX14902358.jpg";
import civil from "./resources/wp2043551.webp";
import robotics from "./resources/Humanoid-Robots-in-Deep-Space-Soon-e1453726043846.jpg";
import enterprenureship from "./resources/Entrepreneurship.jpg";
import pharmacy from "./resources/wp1931784.jpg";
import software from "./resources/4391662.webp";
import onspot from "./resources/diwali-festival-with-indian-rangoli-background-free-vector.jpg";
import sports from "./resources/R.jpg";
import adventure from "./resources/the-start-of-an-adventure-4k-10.jpg";
import photography from "./resources/camera.jpg";
import quiz from "./resources/quiz-1-.jpg"
import { NavLink } from "react-router-dom";
import Footers from "../../Footer Bar/Footers";



// calling the function


export default function Home() {
 
  
   
  

 

  var events = [
    {
      title: "Entertainment",
      events: ["band war", "Open mic", "Beat The Street", "Dance"],
      photo:entertainment,
      link:"/entertainment"
    },
    {
      title: "Mechanical",
      events: ["Cad Champianship", "Fun kart", "Slow Cycle"],
      photo:mechanical,
      link:"/mechanical"
    },
    {
      title: "Management",
      events: ["Snake & Ladder", "Master Chef", "Ramp walk", "Treasure Hunt"],
      photo:management,
      link:"/management"
    },
    {
      title: "Civil",
      events: ["Tic Tac Toe", "Arc Bridge", "Draw Up", "Bridge Maina"],
      photo:civil,
      link:"/civil"
    },
    {
      title: "Robotics",
      events: ["Robo Race", "Robo war", "Line Folloer", "Maze Solver"],
      photo:robotics,
      link:"/robotics"
    },
    {
      title: "Enterprenurship",
      events: [
        "Youth Got Talent",
        "Pushpa",
        "Money Heist",
        "Red Light Green Light",
      ],
      photo:enterprenureship,
      link:"/enterprenureship"
    },
    {
      title: "Pharmacy",
      events: [
        "Musical Chair",
        "Pass the Wire",
        "Selfie Booth",
        "Lips Dont Lie",
      ],
      photo:pharmacy,
      link:"/pharmacy"
    },
    {
      title: "Software",
      events: ["Code Hunter", "Beat The Bug", "Best Googler", "Simon Game"],
      photo:software,
      link:"/software"
    },
    {
      title: "On Spot Event",
      events: [
        "Rangoli",
        "Ball Roll Chalange",
        "Office tennis",
        "Plank Challange",
      ],
      photo:onspot,
      link:"/onspot"
    },
    { title: "Sports", events: ["Tug Of War", "Carrom", "Badminton", "Chess"],photo:sports,link:"/Sports" },
    { title: "Adventerus Events", events: ["Rodies"],photo:adventure,link:"/advsports"},
    { title: "Photography", events: ["Reel", "DSLR", "Mobile"],photo:photography,link:"/photography" },
    { title: "National Quiz", events: ["National Quiz"],photo:quiz, link:"/quiz"},
  ];
  return (
    <>
    <div id="backgr">
    <Navigation></Navigation>
      <div id="main">
        <div id="register">
          <video autoPlay loop muted id="video">
            <source src={background} type="video/mp4" />
          </video>
          <div>
            {window.outerWidth <= 768 ? (
              <NavLink  className="btn btn-outline-warning video-text" to="/registration">
                Register Here...
              </NavLink>
            ) : (
              
              <NavLink
                className="btn btn-outline-warning video-text-pc" to="/registration"
              >
                Register Here...
              </NavLink>
            )}
          </div>
        </div>
        <div >
          <ul style={{ listStyle: "none" }} id="cards">
          {events.map((elements, index) => {
            return ( <div id="cad">
                {window.outerWidth <= 768 ? <li key={index} >
                <div className="card border-info mb-3" style={{ width: " 18rem" }} >
                  <img src={elements.photo} className="card-img-top" alt="image not found" style={{height:"10rem"}} />
                  <div className="card-body">
                    <h5 className="card-title">{elements.title}</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                  <ul className="list-group list-group-flush">
                    {elements.events.map((list,items)=>{
                        return(
                            <li className="list-group-item">{list}</li>
                        )
                    })}
                    
                  </ul>
                  <div className="card-body ">
                  <NavLink className="btn btn-info m-3" to={elements.link}>Register</NavLink>
                  <NavLink  className="btn btn-warning m-3" to="/aboutus">Contact Us</NavLink>
                  </div>
                </div>
              </li> : 
               <li key={index} id="card-pc">
              <div className="card border-info mb-3" style={{ width: " 18rem" }}>
                <img src={elements.photo} className="card-img-top" alt="image not found" style={{height:"10rem"}} />
                <div className="card-body">
                  <h5 className="card-title">{elements.title}</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and
                    make up the bulk of the card's content.
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  {elements.events.map((list,items)=>{
                      return(
                          <li className="list-group-item">{list}</li>
                      )
                  })}
                  
                </ul>
                <div className="card-body ">
                <NavLink className="btn btn-info m-3" to={elements.link}>Register</NavLink>
                  <NavLink  className="btn btn-warning m-3" to="/aboutus">Contact Us</NavLink>
                </div>
              </div>
            </li>}
              </div>
            );
          })}
          </ul>
        </div>
      </div>
      <Footers></Footers>
      </div>
    </>
  );
}
