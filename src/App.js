import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './Components/Login';
import Exchange from './Components/Exchange'
import Market from './Components/Market'
import Wallets from './Components/Wallets'
import Transictions from './Components/Transictions'
import Overview from './Components/Overview'
import Regist from './Components/Regist';
import Paginate from './Components/Paginate'
import Context from './Components/Context';


function App() {
  return (
  <Context>
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
          <Route path='/Paginate' element={<Paginate/>} />
          <Route path='/Context' element={<Context/>} />
        </Routes>
      </div>
 </Context>
  );
}

export default App;