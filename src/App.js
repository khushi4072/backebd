import React from "react";
import Navbar from "./components/Navbar";
import Home from './components/Home.js';
import {BrowserRouter , Route , Routes} from 'react-router-dom';
import Attour from "./components/Attour";
import Attournext from "./components/Attournext";
import CartDetailsPage from "./components/CartDetailsPage";
import Form from "./components/Form";
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/all-tours" element={<Attour />} />
          <Route path="/family-trip/:id" element={<Attournext />}></Route>
          <Route path="/cart/:id" element={<CartDetailsPage />}></Route>
          <Route path="/form" element={<Form />}></Route>

        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
