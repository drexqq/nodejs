import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import page1 from './pages/page1';
import page2 from './pages/page2';
/////////////////////////
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
	  <h1>Hi BiBi :-)</h1>
	  <Router>
	  <ul>
	  	<Link to="/"><li>home</li></Link>
	  	<Link to="/page1"><li>page1</li></Link>
	  	<Link to="/page2"><li>page2</li></Link>
	  </ul>
	  <Switch>
	  	<Route exact path="/" />
	  	<Route path="/page1" component={page1} />
	  	<Route path="/page2" component={page2}/>
	  </Switch>
	  </Router>
      </header>
    </div>
  );
}

export default App;
