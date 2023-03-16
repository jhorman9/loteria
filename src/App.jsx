import { HashRouter, Route, Routes } from "react-router-dom"
import Home from "./assets/pages/Home";
import Navbar from "./assets/component/Navbar"
import About from "./assets/pages/About";
import Instructions from "./assets/pages/Instructions";
import Winners from "./assets/pages/Winners";
import Refunds from "./assets/pages/Refunds";
import './assets/styles/normalize.css'
import Login from "./assets/pages/Login";

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
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
