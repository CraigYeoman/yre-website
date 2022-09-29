import { useState } from "react";
import { Link } from 'react-router-dom'
import "../style.css"
import logo from "../images/yeomanRaceEnginesLogo.svg"
import { TiThMenu } from 'react-icons/ti'

const Navbar = () => {
    const [isNavExpanded, setNavExpanded] = useState(false)


    return (
        <nav className="nav--bar">
            <img src={logo} className="nav--icon" alt="logo"/>
            <Link to="/" className="nav--item">Home</Link>
            <Link to="/Engines" className="nav--item">Engines</Link>
            <Link to="/Tech" className="nav--item">Tech</Link>
            <button className="nav--button"
              onClick={() => {
                setNavExpanded(!isNavExpanded);
              }}
            ><TiThMenu /></button>
            <div className={ isNavExpanded ? "navigation--menu expanded" : "navigation--menu"}>
                <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Engines">Engines</Link>
                </li>
                <li>
                    <Link to="/Tech">Tech</Link>
                </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar