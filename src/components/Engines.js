import { Link } from 'react-router-dom'
import usra from '../images/usra-logo.png'

const Engines = () => {
    return (
        <div>
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
            <div className='engine--seletion-container'>IMCA</div>
            <div className='engine--seletion-container'>Drag Race</div>
            <div className='engine--seletion-container'>Street</div>
          </div>
    )
}

export default Engines