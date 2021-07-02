import './App.css';
import React from "react";
import Home from './Compontents/Home';
import About from './Compontents/About';
import Comments from './Compontents/Comments';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header container">
        <div className='app-logo'>
        <Link to="/">LOGO</Link>
        </div>
      <nav className='navbar-header'> 
          <ul className='navbar-ul'>
            <li className='navbar-li'>
              <Link to="/">Home</Link>
            </li>
            <li className='navbar-li'>
              <Link to="/about">About</Link>
            </li>
            <li className='navbar-li'>
              <Link to="/Comments">Comments</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/Comments">
            <Comments />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </div>

    </Router>
  );
}

export default App;
