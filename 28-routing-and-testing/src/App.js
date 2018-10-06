import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './App.css';
import Dashboard from './components/dashboard/dashboard';
import Landing from './components/landing/landing';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
              </ul>
            </nav>
          </header>
          <main>
            <Route exact path="/" component={Landing} />
            <Route exact path="/dashboard" component={Dashboard} />
          </main>
       
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
