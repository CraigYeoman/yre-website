import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Engines from "./components/Engines";
import UsraBmod from "./components/Engines/USRA/USRA-Bmod";
import UsraStockCar from "./components/Engines/USRA/USRA-StockCar";
import UsraAmod from "./components/Engines/USRA/USRA-Amod";
import ImcaSportMod from "./components/Engines/IMCA/IMCA-SportMod";
import ImcaStockCar from "./components/Engines/IMCA/IMCA-StockCar";
import ImcaModified from "./components/Engines/IMCA/IMCA-Modifieds";
import DragRace from "./components/Engines/DragRace";
import Street from "./components/Engines/Street";
import Contact from "./components/Contact";

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
        <Route path="/ImcaSportMod" element={<ImcaSportMod />}></Route>
        <Route path="/ImcaStockCar" element={<ImcaStockCar />}></Route>
        <Route path="/ImcaModified" element={<ImcaModified />}></Route>
        <Route path="/DragRace" element={<DragRace />}></Route>
        <Route path="/Street" element={<Street />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
