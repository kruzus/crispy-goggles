// eslint-disable-next-line

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
       <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
    
    </>
);
}


export default Navbar
