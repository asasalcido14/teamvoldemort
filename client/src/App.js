import React, {useState} from "react";
import { BrowserRouter as Router, Route,} from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// import ShipMaster from "./pages/ShipMaster";

import {useHistory} from "react-router-dom"


function App() {

  const [currentUser, setCurrentUser] = useState()

  const history = useHistory()
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path= "/">
          <Login setCurrentUser={setCurrentUser}/>
        </Route>
        <Route exact path= "/signup">
          <Signup />
        </Route>
        {/* <Route exact path= "/shipmaster" component={ShipMaster} /> */}
      </div>
    </Router>
        
         
           
   
  );
}

export default App;
