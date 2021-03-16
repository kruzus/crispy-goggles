import "./style.scss"

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useLocation
} from "react-router-dom";

import {About} from "../About/"
import {Contact} from "../Contact"
import {Home} from "../Home"
import {Projects} from "../Projects"
import {NoMatch} from "../NoMatch"

const Navbar = () => {
return(
 <>

 

  
    <nav className="navheader">
      <h3 className="logotext">Logo</h3>
      <ul className="navigation">
        


       <Router>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
        
        <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="*">
            <NoMatch />
          </Route>

        </Switch>
        </Router>
      </ul>
    </nav>
    
    </>
);
}


export default Navbar
