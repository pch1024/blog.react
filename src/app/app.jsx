import React from 'react';
import { Pagination } from 'antd';

import log from '../assets/common.js';
import Home from '../views/home.jsx';
import Login from '../views/login.jsx';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class HelloWord extends React.Component {
  render() {
    return (
      <div>
        <Pagination size="small" total={50} />
        <p>Hello React !</p>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>

            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
          </div>
        </Router>
      </div>
    );
  }
  componentWillMount() {
    log('msg from react');
  }
}
