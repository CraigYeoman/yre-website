import './index';
import Navbar from "./components/Navbar"
import Main from './components/Main';
import  Footer  from "./components/Footer";
import Engines from './components/Engines';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/Engines" element={<Engines />}></Route>
        </Routes> 
      <Footer />
    </Router>
  );
}

export default App;
