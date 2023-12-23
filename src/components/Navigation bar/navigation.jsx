import react from "react"
import "./navigation.css"
import logo from "./resources/con_logo2.png"
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
          <a className="nav-link  fs-3 mx-5" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link fs-3 mx-5" href="#">Organizers</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle fs-3 mx-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Events
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item fs-3" href="#">Entertainment</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item fs-3" href="#">Mechanical</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item fs-3" href="#">Managemengt</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item fs-3" href="#">Civil</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item fs-3" href="#">Robotics</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item fs-3" href="#">Enterprenurship</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item fs-3" href="#">Pharmacy</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item fs-3" href="#">Software</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item fs-3" href="#">On Spot Event</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item fs-3" href="#">Sports</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item fs-3" href="#">Advanterous Events</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item fs-3" href="#">Managemengt</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item fs-3" href="#">Photography</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item fs-3" href="#">National Quiz</a></li>
            <li><hr className="dropdown-divider"/></li>

          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link  fs-3" aria-disabled="true">About Us</a>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
   </div>
)
}
export default Navigation

