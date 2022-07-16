import React from "react";
import Main from "./pages/main";
import { Routes, Route } from "react-router-dom";
import Maps from "./pages/maps";


export default function App() { 
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/maps' element={<Maps/>}/>
      </Routes>
    </div>
  );
}