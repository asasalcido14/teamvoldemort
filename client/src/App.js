import React from "react";
import { BrowserRouter as Router, Route,} from "react-router-dom";
import Login from "../src/pages/Login";
import Signup from "../src/pages/Signup";
import ShipMaster from "../src/pages/ShipMaster";


function App() {
  return (
    <Router>
      <div>
        <Route exact path= "/" component={Login} />
        <Route exact path= "/signup" component={Signup} />
        <Route exact path= "/shipmaster" component={ShipMaster} />
      </div>
    </Router>
        
         
           
   
  );
}

export default App;
