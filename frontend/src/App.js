import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home.js';
import './App.scss';

function App() {
  return (
      <React.Fragment>
        <Router>
            <Route exact path="/" component= {Home} />
        </Router>
      </React.Fragment>
  );
}

export default App;
