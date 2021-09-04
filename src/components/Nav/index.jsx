import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import './index.css'

// 左侧导航组件
export default class Nav extends Component {
    render() {
        // console.log(this.props);
        // const {children:label} = this.props //解构赋值同时修改变量名称 标签体里的内容会放到props.children属性里，等同于在标签上添加了一个children属性
        return (
            <div>
                {/* NavLink有高亮导航的作用 activeClassName可以指定高亮的样式名,默认是active */}
                {/* <NavLink className="nav" activeClassName="active" {...this.props}>{label}</NavLink> */}

                {/* props里包含children */}
                <NavLink className="nav" activeClassName="active" {...this.props}></NavLink> 
            </div>
        )
    }
}
