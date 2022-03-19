import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";
  import Home from "../pages/Home";
const Navbar = () => {
    return (
        <Router>
            <div class="topnav">
                <Link to="/">Home</Link>
                    <Route path="/">
                        <Home />
                    </Route>
                 
            </div>
        </Router>
    
    

    );  
       
} 
export default Navbar;