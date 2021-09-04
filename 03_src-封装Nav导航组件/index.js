// 引入react核心库
import React from 'react'
// 引入ReactDOM
import ReactDOM from 'react-dom'
// HashRouter BrowserRouter 路由的2种模式  路由容器 （router view）
import {BrowserRouter} from 'react-router-dom'
// 引入App根组件
import App from './App'

// 渲染根组件
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'))