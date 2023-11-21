import { useState } from "react";
import { Link } from "react-router-dom";
import "../style.css";
import logo from "../images/yeomanRaceEnginesLogo.svg";
import { TiThMenu } from "react-icons/ti";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true)
    } else {
      setColor(false)
    }
  } 

  window.addEventListener('scroll', changeColor)

  return (
    <Navbar expand="lg" fixed="top" className={color ? 'header header-bg': "header"}>
      <Container>
        <Navbar.Brand> 
          <Link to="/" >
            <img src={logo} className="nav--icon" alt="logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Engines">Engines</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
