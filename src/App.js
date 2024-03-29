import './App.css';
import React from 'react';
import Nav from './components/Nav';
import Test from './components/Test';
import Test2 from './components/Test2';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Cam from './components/redirects/cam';
import Tictactoe from './components/redirects/tictactoe';



function App() {
  return (
      <div className='App'>
        
        <Nav />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/project" element={ <Header /> } />
          <Route path="/test" element={ <Test /> } />
          <Route path="/test2" element={ <Test2 /> } />

          <Route path="/tictactoe" element={ <Tictactoe /> } />
          <Route path="/cameronabbot" element={ <Cam /> } />
        </Routes>
        
      </div>
  );
}

export default App;
