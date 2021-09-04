import React, { Component } from 'react'
import {Switch,Route,NavLink,Redirect} from 'react-router-dom'
import Message from './Message'
import News from './News'

import './index.css'

export default class Home extends Component {
    render() {
        return (
            <div>
                Home page
                <div className="tabs">
                    <NavLink to="/home/news">news</NavLink>
                    <NavLink to="/home/message">message</NavLink>
                </div>
                <div className="tabs-content">
                    {/* 注册二级路由（嵌套路由）， 对应的一级路由不能使用严格匹配 */}
                    {/* 路由的匹配是按照注册的顺序以此进行匹配，二级路由也要到一级路由中去匹配 */}
                    <Switch>
                        <Route path="/home/news" component={News} />
                        <Route path="/home/message" component={Message} />
                        <Redirect to="/home/news" />
                    </Switch>
                </div>
            </div>
        )
    }
}
