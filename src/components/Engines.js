import { Link } from "react-router-dom";
import usra from "../images/usra-logo.png";
import imca from "../images/imca-logo.png";
import dragRace from "../images/drag-race.png";
import street from "../images/street.jpg";

const Engines = () => {
  return (
    <div className="engine--main-container">
      <div className="engine--seletion-container">
        <div className="logos--container">
          <img src={usra} alt="USRA" className="logo" />
        </div>
        <ul>
          <Link to="/UsraBmod">USRA B-Mod</Link>
          <Link to="/UsraStockCar">USRA Stock Car</Link>
          <Link to="/UsraAmod">USRA A-Mod</Link>
        </ul>
      </div>
      <div className="engine--seletion-container">
        <div className="logos--container">
          <img src={imca} alt="IMCA" className="logo" />
        </div>
        <ul>
          <Link to="/ImcaSportMod">IMCA Northern/Southern Sportmod</Link>
          <Link to="/ImcaStockCar">IMCA Stock Car</Link>
          <Link to="/ImcaModified">IMCA Modifieds</Link>
        </ul>
      </div>
      <div className="engine--seletion-container two">
        <div className="logos--container">
          <img src={dragRace} alt="Drag Race" className="logo--two" />
        </div>
        <ul>
          <Link to="/DragRace">Drag Race</Link>
        </ul>
      </div>
      <div className="engine--seletion-container two">
        <div className="logos--container">
          <img src={street} alt="street" className="logo--two" />
        </div>
        <ul>
          <Link to="/Street">Street</Link>
        </ul>
      </div>
    </div>
  );
};

export default Engines;
