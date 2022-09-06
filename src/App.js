import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './Components/Pages/Login/Login';
import Exchange from './Components/Pages/Exchange/Exchange'
import Market from './Components/Pages/Market/Market'
import Wallets from './Components/Pages/Wallets/Wallets'
import Transictions from './Components/Pages/Transaction/Transictions'
import Overview from './Components/Pages/Overview/Overview'
import Regist from './Components/Pages/Regist/Regist';
import Context from './Components/Context';
// import { CSSTransition } from 'react-transition-group'


function App() {

  return (
      <div className="App">
        <Routes>
          <Route path='/' element={<Navigate path='/' to="/login" replace={true}/>} replace={true} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/Regist' element={<Regist/>} />
          <Route path='/Exchange' element={<Exchange/>} />
          <Route path='/Market' element={<Market/>} />
          <Route path='/Wallets' element={<Wallets arr={[90, 30, 130]}/>} />
          <Route path='/Transictions' element={<Transictions/>} />
          <Route path='/Overview' element={<Overview arr={[120, 20, 60]} />} />
          <Route path='/Context' element={<Context/>} />
        </Routes>
      </div>
  );
}

export default App;