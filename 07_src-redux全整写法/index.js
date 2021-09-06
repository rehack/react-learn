// 引入react核心库
import React from 'react'
// 引入ReactDOM
import ReactDOM from 'react-dom'
// 引入App根组件
import App from './App'
import store from './redux/store'

// 渲染根组件
ReactDOM.render(<App />, document.getElementById('root'))

// redux数据有变化就渲染根组件
store.subscribe(() => {
    ReactDOM.render(<App />, document.getElementById('root'))
})