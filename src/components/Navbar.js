import { useState } from "react";
import { Link } from 'react-router-dom'
import "../style.css"
import logo from "../images/yeomanRaceEnginesLogo.svg"
import { TiThMenu } from 'react-icons/ti'

const Navbar = () => {
    const [isNavExpanded, setNavExpanded] = useState(false)


    return (
        <nav className="nav--bar">
            <Link to="/yre-website/" className="nav--icon">
            <img src={logo} className="nav--icon" alt="logo"/>
            </Link>
            
            <Link to="/yre-website/" className="nav--item">Home</Link>
            <Link to="/Engines" className="nav--item">Engines</Link>
            <Link to="/Contact" className="nav--item">Contact</Link>
            <button className="nav--button"
              onClick={() => {
                setNavExpanded(!isNavExpanded);
              }}
            ><TiThMenu /></button>
            <div className={ isNavExpanded ? "navigation--menu expanded" : "navigation--menu"}>
                <ul>
                <li>
                    <Link to="/yre-website/">Home</Link>
                </li>
                <li>
                    <Link to="/Engines">Engines</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar