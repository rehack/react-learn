import React, { Component } from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import About from './pages/About' //pages下的是路由组件
import Home from './pages/Home'
import Header from './components/Header' //一般组件
import Nav from './components/Nav'

import './App.css'
export default class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="main">
                    <div className="left">
                        <Nav to="/home">首页</Nav>                  
                        <Nav to="/about">关于</Nav>                        
                    </div>
                    <div className="right">
                        {/* 注册路由 */}
                        {/* Switch组件作用是防止相同路径的组件重复匹配，相同的路由只匹配一次，可以提供效率，如果没有出现重复的路由，可以不用这个组件 */}
                        {/* exact属性是设置路由规则要进行精准严格匹配，严格匹配根据实际情况使用  默认情况下是模糊匹配*/}
                        <Switch>
                            <Route path="/home" component={Home} />
                            <Route path="/about" component={About} />

                            {/* 重定向路由：路由规则都没有匹配上的时候，就由此重定向到指定的某个路由（比如首页或者单独的404页面），此路由一般写在所有注册路由的最下方 */}
                            <Redirect to="/home"/>
                        </Switch>
                        
                    </div>
                </div>
            </div>
        )
    }
}
