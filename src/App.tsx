import Navbar from "./components/Navigation"
import {About} from "./components/About"
import {Home} from "./components/Home"
import {Projects} from "./components/Projects"
import {Contact} from "./components/Contact"
import {NoMatch} from "./components/NoMatch"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


const App = () => {
 return (
<Router>
  <Navbar />
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/about"  component={About} />
    <Route path="/projects"  component={Projects} />
    <Route path="/contact"  component={Contact} />
    <Route component={NoMatch} />
  </Switch>
</Router>
 )
}

export default App
