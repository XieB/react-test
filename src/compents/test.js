import React, { Component } from 'react';
import {HashRouter,Route , Switch,NavLink} from 'react-router-dom';
import Hxx from './xx';
import style from '@/assets/css/common.less';

export default class Test extends Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            xx : 'i am xx',
        }
        this.handClick = this.handClick.bind(this);
    }
    handClick(id,e){
        console.log('aaa');
        console.log(e);
    }
    render(){
        return (
            <div>
                <NavLink to="/about/34" activeStyle={{color:'red'}}>About</NavLink>
                <h1 className={style.test}>这是另外一个组件</h1>
                <h3>{this.state.xx}</h3>
                <button onClick={this.handClick.bind(this,2)}>click</button>
                <Hxx></Hxx>
            </div>
        );
    }
}
