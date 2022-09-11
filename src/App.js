/*import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import ProtectedRoute from './ProtectedRoute'
function App() {
  return (
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Reports} />
          <ProtectedRoute path='/products' component={Products} />
        </Switch>
      </Router>
    
  );
}


import React from "react";
import { PrivateRoute } from "./routeTest/PrivateRoute";

import { BrowserRouter, Route, Switch } from "react-router-dom";

//import "./styles.css";
import { Public } from "./routeTest/Public";
import { Private } from "./routeTest/Private";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Public} />
        <PrivateRoute exact path="/app" component={Private} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </div>
  );
}

export default App;
*/
