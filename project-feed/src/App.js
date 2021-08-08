import React, { useEffect, useState } from "react";
import './App.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import NavBar from './Components/NavBar';
import About from './Pages/About';
import Landing from './Pages/Landing';
import { OrgSignup, VolunteerSignup } from './Pages/Signup';

function App() {
  const [state, setState] = useState([]);
  useEffect(() => {
      fetch("http://localhost:9000/restaurants")
        .then(res => res.text())
        .then(res => setState({ apiResponse: res }));
  });
  // console.log(state.apiResponse);

  return (
    <div className="App">
      {state.apiResponse}
      {/* <Router>
        <NavBar />  

        <Switch>
          <Route path="/home">
            <Landing>{state.apiResponse}</Landing>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/volunteer-signup">
            <VolunteerSignup />
          </Route>
          <Route path="/org-signup">
            <OrgSignup />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
