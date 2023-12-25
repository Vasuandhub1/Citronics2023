import react from "react"
import "./navigation.css"
import logo from "./resources/con_logo2.png"
import { NavLink } from "react-router-dom"
function Navigation(){
return(
   <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={logo} alt="error"  id="logo"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  me-auto mb-3 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link  fs-3 mx-5" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fs-3 mx-5" to="/organizers">Organizers</NavLink>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle fs-3 mx-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Events
          </a>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item fs-3" to="/entertainment">Entertainment</NavLink></li>
            <li><hr className="dropdown-divider"/></li>
            <li><NavLink className="dropdown-item fs-3" to="/mechanical">Mechanical</NavLink></li>
            <li><hr className="dropdown-divider"/></li>
            <li><NavLink className="dropdown-item fs-3" to="/management">Managemengt</NavLink></li>
            <li><hr className="dropdown-divider"/></li>
            <li><NavLink className="dropdown-item fs-3" to="/civil">Civil</NavLink></li>
            <li><hr className="dropdown-divider"/></li>
            <li><NavLink className="dropdown-item fs-3" to="/robotics">Robotics</NavLink></li>
            <li><hr className="dropdown-divider"/></li>
            <li><NavLink className="dropdown-item fs-3" to="/enterprenureship">Enterprenurship</NavLink></li>
            <li><hr className="dropdown-divider"/></li>
            <li><NavLink className="dropdown-item fs-3"to="/pharmacy"  >Pharmacy</NavLink></li>
            <li><hr className="dropdown-divider"/></li>
            <li><NavLink className="dropdown-item fs-3" to="/software">Software</NavLink></li>
            <li><hr className="dropdown-divider"/></li>
            <li><NavLink className="dropdown-item fs-3" to="/onspot">On Spot Event</NavLink></li>
            <li><hr className="dropdown-divider"/></li>
            <li><NavLink className="dropdown-item fs-3" to="/sports">Sports</NavLink></li>
            <li><hr className="dropdown-divider"/></li>
            <li><NavLink className="dropdown-item fs-3" to="/advsports">Advanterous Events</NavLink></li>
            <li><hr className="dropdown-divider"/></li>
            <li><NavLink className="dropdown-item fs-3" to="/photography">Photography</NavLink></li>
            <li><hr className="dropdown-divider"/></li>
            <li><NavLink className="dropdown-item fs-3" to="/quiz">National Quiz</NavLink></li>
            <li><hr className="dropdown-divider"/></li>

          </ul>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link  fs-3" aria-disabled="true" to="/aboutus ">About Us</NavLink>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
   </div>
)
}
export default Navigation

