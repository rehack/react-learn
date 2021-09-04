import React, { Component } from 'react'
import {NavLink,Route} from 'react-router-dom'
import About from './pages/About' //pages下的是路由组件
import Home from './pages/Home'
import Header from './components/Header' //一般组件

import './App.css'
export default class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="main">
                    <div className="left">
                        {/* 通过路由链接切换组件 */}
                        {/* <Link className="nav active" to="home">Home</Link>
                        <Link className="nav" to="about">About</Link> */}

                        {/* NavLink有高亮导航的作用 activeClassName可以指定高亮的样式名,默认是active */}
                        <NavLink className="nav" activeClassName="active" to="home">Home</NavLink>
                        <NavLink className="nav" to="about">About</NavLink>
                    </div>
                    <div className="right">
                        {/* 注册路由 */}
                        <Route path="/about" component={About} />
                        <Route path="/home" component={Home} />
                        
                    </div>
                </div>
            </div>
        )
    }
}
