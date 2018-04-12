import React, { Component } from 'react';
import {HashRouter} from 'react-router-dom';
import Router from './router/index';

// document.title = '这是测试页面';



class App extends Component {
  render() {
    return (
      <HashRouter>
          <div className="container">
              <Router />
          </div>
      </HashRouter>
    );
  }
}

export default App;
