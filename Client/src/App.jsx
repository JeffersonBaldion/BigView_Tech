import { Route, Routes, useNavigate } from "react-router-dom";
import LandingPage from "./Views/LandingPage/LandingPage";
import Header from "./Components/Header/Header";

import style from "./App.module.css"
import Stock from "./Views/Stock/Stock";
import Login from "./Views/Login/Login";
import React from "react";

function App() {

  const navigate = useNavigate()
  React.useEffect(()=>{
    {sessionStorage.hasOwnProperty('Email')?null:navigate('/')}
  },[sessionStorage])

  return (
    <div className={style.appContainer}>

      

      <Header/>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route id="landing" path="/home" element={<LandingPage/>} />
        <Route id="landing" path="/catalogo" element={<Stock/>} />
      </Routes>
    </div>
  );
}

export default App;
