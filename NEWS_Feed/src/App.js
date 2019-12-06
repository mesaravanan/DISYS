import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Create from './components/create.component';
import News from './components/news.component';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/news'} className="navbar-brand">NEWS FEED</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">             
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Certificate User</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/news'} className="nav-link">NEWS LIST</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
              <Route exact path='/create' component={ Create } />              
              <Route path='/news' component={ News } />
              <Route path='/' component={ News } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
