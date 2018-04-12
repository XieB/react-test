import React, { Component } from 'react';
import {HashRouter,Route , Switch} from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from './my-loading';

const Test = Loadable({
    loader: () => import('@/compents/test'),
    loading: Loading,
});

const Home = Loadable({
    loader: () => import('@/compents/home'),
    loading: Loading,
});

// import Test from '@/compents/test';
// import Home from '@/compents/home';

// document.title = '这是测试页面';



class App extends Component {
  render() {
    return (
      <HashRouter>
          <Switch>
              <Route exact  path="/" component={Home}/>
              <Route path="/about/:id" component={Test}/>
          </Switch>
      </HashRouter>
    );
  }
}

export default App;
