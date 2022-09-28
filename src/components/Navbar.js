import { useState } from "react";
import "../style.css"
import logo from "../images/yeomanRaceEnginesLogo.svg"
import { TiThMenu } from 'react-icons/ti'

const Navbar = () => {
    const [isNavExpanded, setNavExpanded] = useState(false)


    return (
        <nav className="nav--bar">
            <img src={logo} className="nav--icon" alt="logo"/>
            <div className="nav--item">Home</div>
            <div className="nav--item">Engines</div>
            <div className="nav--item">Tech</div>
            <buttton className="nav--button"
              onClick={() => {
                setNavExpanded(!isNavExpanded);
              }}
            ><TiThMenu /></buttton>
            <div className={ isNavExpanded ? "navigation--menu expanded" : "navigation--menu"}>
                <ul>
                <li>
                    <a href="/home">Home</a>
                </li>
                <li>
                    <a href="/about">Engines</a>
                </li>
                <li>
                    <a href="/contact">Tech</a>
                </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar