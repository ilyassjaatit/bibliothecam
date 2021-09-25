import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Home } from './pages/Home.js';
import { Book } from './pages/Book.js';
import {NotFoundPage} from './pages/NotFoundPage.js';
import './App.scss';

function App() {
  return (
      <React.Fragment>
        <Router>
            <Switch>
                <Route exact path="/" component= {Home} />
                <Route path="/books" component= {Book} />
                <Route path="*" component={NotFoundPage} />
            </Switch>
        </Router>
      </React.Fragment>
  );
}

export default App;
