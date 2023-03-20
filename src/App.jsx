import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./assets/pages/Home";
import Navbar from "./assets/component/Navbar";
import About from "./assets/pages/About";
import Instructions from "./assets/pages/Instructions";
import Winners from "./assets/pages/Winners";
import Refunds from "./assets/pages/Refunds";
import './assets/styles/normalize.css';
import Login from "./assets/pages/Login";
import Footer from "./assets/component/Footer";
import Privacy from "./assets/pages/Privacy";
import Sports from "./assets/pages/Sports";
import Lottery from "./assets/pages/Lottery";
import Aside from "./assets/component/Aside";

function App() {

  return (
    <div className="App">
      <HashRouter>
        <Navbar/>
          <Routes >
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/instructions" element={<Instructions/>}/>
            <Route path="/winners" element={<Winners/>}/>
            <Route path="/refunds" element={<Refunds/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/privacy" element={<Privacy/>} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/lottery" element={<Lottery />} />
          </Routes>
      </HashRouter>
      <Footer />
    </div>
  )
}

export default App
