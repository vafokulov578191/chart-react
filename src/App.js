import React from 'react';
import './App.css';
import { Routes, Route, Navigate, NavLink } from 'react-router-dom'
import Login from './Components/Pages/Login/Login';
import Exchange from './Components/Pages/Exchange/Exchange'
import Market from './Components/Pages/Market/Market'
import Wallets from './Components/Pages/Wallets/Wallets'
import Transictions from './Components/Pages/Transaction/Transictions'
import Overview from './Components/Pages/Overview/Overview'
import Regist from './Components/Pages/Regist/Regist';
import Context from './Components/Context';
// import { CSSTransition } from 'react-transition-group'

// const routes = [
//   { path: '/', Component: <Login/> },
//   { path: '/Regist', Component: <Regist/> },
//   { path: '/Exchange', Component: <Exchange/> },
//   { path: '/Market', Component: <Market/> },
//   { path: '/Wallets', Component: <Wallets/> },
//   { path: '/Transictions', Component: <Transictions/> },
//   { path: '/Overview', Component: <Overview/> },
//   { path: '/Context', Component: <Context/> },
// ]

function App() {

  return (
      <div className="App">
        <Routes>
          {/* {
            routes.map((route) => (
              <Route key={route.path} to={route.path} />
            ))
          } */}
          <Route path='/' element={<Navigate path='/' to="/login" replace={true}/>} replace={true} />
          <Route path='/login' element={<Login/>} />
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