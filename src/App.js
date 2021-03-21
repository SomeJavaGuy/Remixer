import React from 'react'
import './App.css';
import Navbar from './components/Navbar';

import License from './Pages/License';
import Home from './Pages/Home';
import Remix from './components/Remix';
import Sidebar from './components/SideNavigation';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <>
     <Router>
       {/* <Navbar /> */}
       <Sidebar />
       {/* <NFT /> */}
       
      {/* <Switch>
        <Route path="/main" />
      </Switch> */}
      <Switch>
        <Route exact path="/home" component={Home} />
        {/* <Route path="/about" component={About} /> */}
        <Route path="/license" component={License} />
        {/* <Route component={NoMatch} /> */}
    </Switch>
    <Remix />
    </Router>

    </>

  );
}

export default App;
