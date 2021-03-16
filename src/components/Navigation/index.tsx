import { Link } from "react-router-dom"
import styled from "styled-components"

const NavStyler = styled.nav`
list-style-type: none;

display: flex;
justify-content: space-around;
align-items: center;
min-height: 10vh;

border: 1px solid black;
text-decoration: none;
flex: 1;
`

const Navbar = () => {
return(
 <>
 <NavStyler>
 <h3>Logo</h3>
 <Link to="/"><li>Home</li></Link>
 <Link to="/projects"><li>Projects</li></Link>
 <Link to="/about"><li>About</li></Link>
 <Link to="/contact"><li>Contact</li></Link>
 </NavStyler>
 </>
);
}


export default Navbar
