import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import NFT from './components/NFT';
import Remix from './components/Remix';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <>
     <Router>
       <Navbar />
       <NFT />
       <Remix />
      <Switch>
        <Route path="/main" />
      </Switch>
    </Router>

    </>

  );
}

export default App;
