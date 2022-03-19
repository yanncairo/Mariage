import {
    BrowserRouter as 
    Link
  } from "react-router-dom";
  import React from "react";
  import './Navbar.css'
const Navbar = () => {
    return (
     
            <div class="topnav">
                 <Link to="/Home"><a class="active" >Home</a></Link>
                <a >News</a>
                <a >Contact</a>
                <a >About</a>
                
            </div>
  
    
    

    );  
       
} 
export default Navbar;