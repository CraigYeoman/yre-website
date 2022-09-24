import React from "react"
import "../style.css"
import logo from "../images/yeomanRaceEnginesLogo.svg"

const Navbar = () => {

    return (
        <nav className="nav--bar">
            <img src={logo} className="nav--icon" alt="logo"/>
            <div className="nav--item">Home</div>
            <div className="nav--item">Engines</div>
            <div className="nav--item">Tech</div>
        </nav>
    )
}

export default Navbar