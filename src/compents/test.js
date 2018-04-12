import React, { Component } from 'react';
import style from '@/assets/css/common.less';

export default class Test extends Component{
    constructor(props){
        super(props);
        console.log(this.props.match);
    }
    render(){
        return <h1 className={style.test}>这是另外一个组件</h1>;
    }
}
