import './App.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import NavBar from './Components/NavBar';
import About from './Pages/About';
import Landing from './Pages/Landing';
import OrgSignup from './Pages/OrgSignup';
import VolunteerSignup from './Pages/VolunteerSignUp';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />  

        <Switch>
          <Route path="/home">
            <Landing />
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
      </Router>
    </div>
  );
}

export default App;
