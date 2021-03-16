import { Link } from "react-router-dom"
import styled from "styled-components"

import "./style.scss"

const HeaderWrapper = styled.header`
//Main Head Wrapper
border: 1px solid black;
display: -webkit-box;
display: -moz-box;
display: -ms-flexbox;
display: -webkit-flex;
display: flex;
justify-content: space-around;
min-height: 10vh;
align-items: center;
font-size: 1.2em;
`


const Navbar = () => {
return(
 <>
  <HeaderWrapper>
    <h3 className="logotext">Logo</h3>
      
        <ul className="navlinks">
        <Link to="/"><li>Home</li></Link>
        <Link to="/projects"><li>Projects</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
        </ul>
      
  </HeaderWrapper>
 </>
);
}


export default Navbar
