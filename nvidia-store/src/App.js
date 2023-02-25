import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Pages/Homepage';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Nav from './Components/Nav';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Homepage/>}/>
        <Route path="/Shop" exact element={<Shop/>}/>
        <Route path="/Shop/Product/:id" element={<Product/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
