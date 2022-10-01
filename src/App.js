import './index';
import Navbar from "./components/Navbar"
import Main from './components/Main';
import Footer  from "./components/Footer";
import Engines from './components/Engines';
import UsraBmod from './components/Engines/USRA/USRA-Bmod'
import UsraStockCar from './components/Engines/USRA/USRA-StockCar'
import UsraAmod from './components/Engines/USRA/USRA-Amod'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/Engines" element={<Engines />}></Route>
        <Route path="/UsraBmod" element={<UsraBmod />}></Route>
        <Route path="/UsraStockCar" element={<UsraStockCar />}></Route>
        <Route path="/UsraAmod" element={<UsraAmod />}></Route>
        {/*<Route path="/Engines" element={<Engines />}></Route>
            <div>USRA</div>
            <div>IMCA</div>
            <div>Drag Race</div>
            <div>Street</div>*/}
        </Routes> 
      <Footer />
    </Router>
  );
}

export default App;
