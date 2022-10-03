import { Link } from 'react-router-dom'
import usra from '../images/usra-logo.png'
import imca from '../images/imca-logo.png'

const Engines = () => {
    return (
        <div className='engine--main-container'>
            <div className='engine--seletion-container'>
                <div>
                    <img src={usra} alt="USRA" />
                </div>
                <ul>
                    <Link to="/UsraBmod">USRA B-Mod</Link>
                    <Link to="/UsraStockCar">USRA Stock Car</Link>
                    <Link to="/UsraAmod">USRA A-Mod</Link>
                </ul>
            </div>
            <div className='engine--seletion-container'>
            <div>
                    <img src={imca} alt="IMCA" />
                </div>
                <ul>
                    <Link to="/ImcaSportMod">IMCA Northern/Southern Sportmod</Link>
                    <Link to="/ImcaStockCar">IMCA Stock Car</Link>
                    <Link to="/ImcaModified">IMCA Modifieds</Link>
                </ul>
            </div>
            <div className='engine--seletion-container'>
                <Link to="/DragRace">Drag Race</Link>
            </div>
            <div className='engine--seletion-container'>
                <Link to="/Street">Street</Link>
            </div>
          </div>
    )
}

export default Engines