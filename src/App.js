
import './App.css';
import Home from './components/pagess/home/home';
import Aboutus from "./components/About/Aboutus.jsx";
import Entertainment from './components/pagess/Eventss/Entertainment/entertainment.jsx';
import Mechanical from './components/pagess/Eventss/Mechanical/mechanical.jsx';
import Management from './components/pagess/Eventss/Management/management.jsx';
import Civil from './components/pagess/Eventss/Civil/civil.jsx';
import Robotics from './components/pagess/Eventss/Robotics/robotics.jsx';
import Enterprenurship from './components/pagess/Eventss/Enterprenureship/enterprenureship.jsx';
import Pharmacy from './components/pagess/Eventss/Pharmacy/pharmacy.jsx';
import Software from './components/pagess/Eventss/Software/software.jsx';
import Onspot from './components/pagess/Eventss/On spot evnet/onspot.jsx';
import Sports from './components/pagess/Eventss/Sports/sports.jsx';
import Advsports from './components/pagess/Eventss/Adventurus sports/advsports.jsx';
import Photography from './components/pagess/Eventss/Photography/photography.jsx';
import Quiz from './components/pagess/Eventss/Quiz/quiz.jsx';
import Oraganize from './components/pagess/Organ/oraganize.jsx';
import Registration from './components/pagess/registration/registration.jsx';
import {RouterProvider, createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([{path:"/",element: <Home/>},
{path:"/aboutus",element:<Aboutus/>},
{path:"/entertainment",element:<Entertainment/>},
{path:"/mechanical",element:<Mechanical/>},
{path:"/management",element:<Management/>},
{path:"/civil",element:<Civil/>},
{path:"/robotics" , element:<Robotics/>},
{path:"/enterprenureship",element:<Enterprenurship/>},
{path:"/pharmacy", element:<Pharmacy/>},
{path:"/software", element:<Software/>},
{path:"/onspot",element:<Onspot/>},
{path:"/sports",element:<Sports/>},
{path:"/advsports",element:<Advsports/>},
{path:"/photography",element:<Photography/>},
{path:"/quiz",element:<Quiz/>},
{path:"/organize",element:<Oraganize/>},
{path:"/registration",element:<Registration/>}
])
function App() {
  return (
    
     <RouterProvider router={router}/>
    
  );
}

export default App;
