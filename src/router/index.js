import React, { Component } from 'react';
import { Route , Switch} from 'react-router-dom';

import Test from '@/compents/test';
import Home from '@/compents/home';

export default class router extends Component{
    render() {
        return (
            <Switch>
                <Route exact  path="/" component={Home}/>
                <Route path="/about/:id" component={Test}/>
            </Switch>
        );
    }
}