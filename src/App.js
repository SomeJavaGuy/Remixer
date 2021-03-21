import React from 'react'
import './App.css';

import License from './Pages/License';
import Home from './Pages/Home';
import Payment from './Pages/Payments';
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
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        {/* <Route path="/about" component={About} /> */}
        <Route path="/license" component={License} />
        <Route path="/payment" component={Payment} />
        {/* <Route component={NoMatch} /> */}
    </Switch>
    <Remix />
    </Router>

    </>

  );
}

export default App;
