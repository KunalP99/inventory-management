import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Inventory from "./pages/Inventory";

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <NavBar />
        <div className='pages'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/api/inventory' element={<Inventory />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
