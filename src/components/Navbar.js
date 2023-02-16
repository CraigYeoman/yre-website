import { useState } from "react";
import { Link } from "react-router-dom";
import "../style.css";
import logo from "../images/yeomanRaceEnginesLogo.svg";
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  const [isNavExpanded, setNavExpanded] = useState(false);

  return (
    <nav className="nav--container">
      <div className="nav--bar">
        <Link to="/" className="nav--icon">
          <img src={logo} className="nav--icon" alt="logo" />
        </Link>

        <Link to="/" className="nav--item">
          Home
        </Link>
        <Link to="/Engines" className="nav--item">
          Engines
        </Link>
        <Link to="/Contact" className="nav--item">
          Contact
        </Link>

        <button
          className="nav--button"
          onMouseOver={() => setNavExpanded(true)}
          onMouseLeave={() => setNavExpanded(false)}
          onMouseEnter={() => setNavExpanded(true)}
          onClick={() => setNavExpanded(!isNavExpanded)}
        >
          <TiThMenu />
        </button>
      </div>
      <div className="nav--bar title">
        <div className="nav--item">200+ Wins in 2022</div>
      </div>

      <div
        className={
          isNavExpanded ? "navigation--menu expanded" : "navigation--menu"
        }
      >
        <div className="nav--dropdown">
          <div className="nav--link">
            <Link to="/">Home</Link>
          </div>
          <div className="nav--link">
            <Link to="/Engines">Engines</Link>
          </div>
          <div className="nav--link">
            <Link to="/Contact">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
