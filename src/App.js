
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
import amount_context from './components/context/context.jsx';
import {RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from './components/pagess/Cart/Cart.jsx';
import { useEffect, useState } from 'react';


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
{path:"/registration",element:<Registration/>},
{path:"/cart",element:<Cart/>}
])
function App() {
  const[amount,Setamount]=useState(0)

  // list of all the events 

  const[data,Setdata]=useState([{
    title: "Rodies",
    dis: "Band war is a term that refers to the rivalry or conflict between two or more musical bands or groups.",
    price: 100,
    values:0,
    branch:"adventure"
    }, 
    {
      title: "Tic Tac Toe",
      dis: "Band war is a term that refers to the rivalry or conflict between two or more musical bands or groups, . ",
      price: 20,
      values:0,
      branch:"civil"
    },
    {
        title:"Arc Bridge",
        dis:"Open mic is a term that refers to a live show at a venue where anyone can perform on stage.  ",
        price:200,
        values:0,
        branch:"civil"
    },
    {
        title:"Draw Up",
        dis:"Beat the Street is a community-wide programme that encourages people to walk, cycle, .",
        price:150,
        values:0,
        branch:"civil"
    },
    {
      title:"Bridge Mania",
      dis:"Bridge mania is a game",
      price:100,
      values:0,
      branch:"civil"
    },
    {
      title: "Youth Got Talent",
      dis: "Band war is a term that refers to the rivalry or conflict between two or more musical bands or groups, . ",
      price: 400,
      values:0,
      branch:"enterprenureship"
    },
    {
        title:"Pushpa",
        dis:"Open mic is a term that refers to a live show at a venue where anyone can perform on stage.  ",
        price:250,
        values:0,
        branch:"enterprenureship"
    },
    {
        title:"Money Heist",
        dis:"Beat the Street is a community-wide programme that encourages people to walk, cycle, .",
        price:50,
        values:0,
        branch:"enterprenureship"
    },
    {
      title:"Red Light Green Light",
      dis:"A game taken from squid games",
      price:80,
      values:0,
      branch:"enterprenureship"
    },
    {
      title: "Band War",
      dis: "Band war is a term that refers to the rivalry or conflict between two or more musical bands or groups, . ",
      price: 2000,
      values:0,
      branch:"entertainment"
    },
    {
        title:"Open Mic",
        dis:"Open mic is a term that refers to a live show at a venue where anyone can perform on stage.  ",
        price:200,
        values:0,
        branch:"entertainment"
    },
    {
        title:"Beat the Street",
        dis:"Beat the Street is a community-wide programme that encourages people to walk, cycle, .",
        price:200,
        values:0,
        branch:"entertainment"
    },
    {
        title:"Dance",
        dis:"Dance is an art form that involves the movement of the body in a rhythmic way, usually to music and within a given space,",
        price:300,
        values:0,
        branch:"entertainment"
    },
    {
      title: "Snakes and Ladder",
      dis: "Band war is a term that refers to the rivalry or conflict between two or more musical bands or groups, . ",
      price: 100,
      values:0,
      branch:"management"
    },
    {
        title:"master Chef",
        dis:"Open mic is a term that refers to a live show at a venue where anyone can perform on stage.  ",
        price:200,
        values:0,
        branch:"management"
    },
    {
        title:"Ramp Walk",
        dis:"Beat the Street is a community-wide programme that encourages people to walk, cycle, .",
        price:250,
        values:0,
        branch:"management"
    },
    {
      title:"Treasure Hunt",
      dis:"In this game we have to fing the treasure chest",
      price:100,
      values:0,
      branch:"management"
    },
    {
      title: "Cad championship",
      dis: "Band war is a term that refers to the rivalry or conflict between two or more musical bands or groups, . ",
      price: 50,
      values:0,
      branch:"mechanical"
    },
    {
        title:"Fun cart",
        dis:"Open mic is a term that refers to a live show at a venue where anyone can perform on stage.  ",
        price:500,
        values:0,
      branch:"mechanical"
    },
    {
        title:"Slow cycle",
        dis:"Beat the Street is a community-wide programme that encourages people to walk, cycle, .",
        price:100,
        values:0,
      branch:"mechanical"
    },
    {
      title: "Rangoli",
      dis: "Band war is a term that refers to the rivalry or conflict between two  . ",
      price: 50,
      values:0,
      branch:"onspot"
    },
    {
        title:"Ball Roll Chalange",
        dis:"Open mic is a term that refers to a live show at a venue where anyone can perform on stage.  ",
        price:30,
        values:0,
      branch:"onspot"
    },
    {
        title:"Office tennis",
        dis:"Beat the Street is a community-wide programme that encourages people to walk, cycle, .",
        price:100,
        values:0,
      branch:"onspot"
    },
    {
      title:"Plank Challange",
      dis:"5 min plank challange.",
      price:50,
      values:0,
      branch:"onspot"
    },
    {
      title: "Musical Chair",
      dis: "Band war is a term that refers to the rivalry or conflict between two or more musical bands or groups, . ",
      price: 200,
      values:0,
      branch:"pharmacy"
    },
    {
        title:"Pass The Wire",
        dis:"Open mic is a term that refers to a live show at a venue where anyone can perform on stage.  ",
        price:200,
        values:0,
      branch:"pharmacy"
    },
    {
        title:"Selfie Booth",
        dis:"Beat the Street is a community-wide programme that encourages people to walk, cycle, .",
        price:200,
        values:0,
      branch:"pharmacy"
    },
    {
      title:"Lips Dont Lie",
      dis:"catch the lier in thie game",
      price:50,
      values:0,
      branch:"pharmacy"
    },
    {
      title: "Reel",
      dis: "Band war is a term that refers to the rivalry or conflict between two or more musical bands or groups, . ",
      price: 2000,
      values:0,
      branch:"photography"
    },
    {
        title:"DSLR",
        dis:"Open mic is a term that refers to a live show at a venue where anyone can perform on stage.  ",
        price:200,
        values:0,
      branch:"photography"
    },
    {
        title:"Mobile",
        dis:"Beat the Street is a community-wide programme that encourages people to walk, cycle, .",
        price:200,
        values:0,
      branch:"photography"
    },
    {
      title: "National Quiz",
      dis: "Band war is a term that refers to the rivalry or conflict between two or more musical bands or groups, . ",
      price: 2000,
      values:0,
      branch:"quiz"
    },
    {
      title: "Robo Race",
      dis: "Band war is a term that refers to the rivalry or conflict between two or more musical bands or groups.",
      price: 2000,
      values:0,
      branch:"robotics"
    },
    {
        title:"Robo War",
        dis:"Open mic is a term that refers to a live show at a venue where anyone can perform on stage.",
        price:2000,
        values:0,
      branch:"robotics"
    },
    {
        title:"Line Folloer",
        dis:"Beat the Street is a community-wide programme that encourages people to walk, cycle.",
        price:2000,
        values:0,
      branch:"robotics"
    },
    {
      title:"Maze Solver",
      dis:"solve the maze problem",
      price:60,
      values:0,
      branch:"robotics"
    },
    {
      title: "Code Hunter",
      dis: "Band war is a term that refers to the rivalry or conflict between two or more musical bands or groups, . ",
      price: 60,
      values:0,
      branch:"software"
    },
    {
        title:"Beat The Bug",
        dis:"Open mic is a term that refers to a live show at a venue where anyone can perform on stage.  ",
        price:50,
        values:0,
      branch:"software"
    },
    {
        title:"Best Googler",
        dis:"Beat the Street is a community-wide programme that encourages people to walk, cycle, .",
        price:50,
        values:0,
      branch:"software"
    },
    {
      title:"Simon Game",
      dis:"play the simon color game",
      price:50,
      values:0,
      branch:"software"
    },
    {
      title: "Tug Of War",
      dis: "Band war is a term that refers to the rivalry or conflict between two or more musical bands or groups, . ",
      price: 100,
      values:0,
      branch:"sports"
    },
    {
        title:"Carrom",
        dis:"Open mic is a term that refers to a live show at a venue where anyone can perform on stage.  ",
        price:150,
        values:0,
      branch:"sports"
    },
    {
        title:"Badminton",
        dis:"Beat the Street is a community-wide programme that encourages people to walk, cycle, .",
        price:200,
        values:0,
      branch:"sports"
    },
    {
      title:"Chess",
      dis:"best stretagic game to play for brain exercise",
      print:50,
      values:0,
      branch:"sports"
    }
])
  
 console.log("the amount from app component",amount)
  
  return (
     <amount_context.Provider value={{amount,data,Setdata,Setamount}}>
     <RouterProvider router={router}/>
     </amount_context.Provider>
     
    
  );
}

export default App;
