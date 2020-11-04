import React from "react";
import { BrowserRouter as Router, Route,} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar.js"
// import ShipMaster from "./pages/ShipMaster";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path= "/" component={Login} />
        <Route exact path= "/signup" component={Signup} />
        {/* <Route exact path= "/shipmaster" component={ShipMaster} /> */}
      </div>
    </Router>
        
         
           
   
  );
}

export default App;
