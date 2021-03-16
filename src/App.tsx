import "./App.scss"
import Navbar from "./components/Navigation"
import {About} from "./components/About"
import {Home} from "./components/Home"
import {Projects} from "./components/Projects"
import {Contact} from "./components/Contact"
import {NoMatch} from "./components/NoMatch"
import {BrowserRouter as Router, Route} from 'react-router-dom';


const App = () => {
 return (
  <>
    <Router>
    <Navbar />

    <Route exact path="/">
    <Home />
    </Route>

    <Route  path="/contacts">
    <Contact />
    </Route>

    <Route  path="/projects">
    <Projects />
    </Route>

    <Route  path="/about">
    <About />
    </Route>


    
    </Router>
  </>
 )
}

export default App
