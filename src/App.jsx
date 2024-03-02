 
 import Home from "./component/Home";
import About from './component/About'
import Conta from './component/Conta'
import Footer from './component/Footer'
 import Hearder from './component/Hearder'
import Kirtan from './component/Kirtan'
import Meditation from './component/Meditation'
 import Yoga from './component/Yoga'
 import { Routes, Route } from "react-router-dom";


function App() { 
  
  return (
    <>
    <Hearder/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/conta" element={<Conta/>}/>
      <Route path="/kirtan" element={<Kirtan/>}/>
      <Route path="/medi" element={<Meditation/>}/>
      <Route path="/yoga" element={<Yoga/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
