import React, { Component } from 'react';
import {HashRouter,Route , Switch,Link} from 'react-router-dom';
import axios from '../axios/index';
import style from '@/assets/css/common.less';
let classNames = require('classnames');



const Xx = () => (
    <div>
        <h3>this is xx</h3>
    </div>
)


const stylexx ={
    aa : {
        'fontSize' : '200px',
    }
}

export default class Test extends Component{
    constructor(props){
        super(props);
        this.click = this.click.bind(this);
    }
    click(){
        axios.get('tmp.php').then(res=>{
            console.log(res);
        })
    }
    render(){
        let btnClass = classNames(style.test,{
            'btn-xx' : true,
        });
        return (
            <div>
                <h1 style={stylexx.aa}>这是首页组件，我要测试下axios</h1>
                <h2 className={btnClass}>哈希一样么？</h2>
                <button onClick={this.click}>点击</button>
                <Route path={`${this.props.match.url}/:userId`} component={Xx}/>
            </div>
        );
    }
}