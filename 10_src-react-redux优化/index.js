// 引入react核心库
import React from 'react'
// 引入ReactDOM
import ReactDOM from 'react-dom'
// 引入App根组件
import App from './App'
import { Provider } from 'react-redux'
import store from './redux/store'


// 渲染根组件
// ReactDOM.render(<App />, document.getElementById('root'))

// 用Provider统一传store
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
 )

// redux数据有变化就渲染根组件 用了react-redux就不需要写这个了
/* store.subscribe(() => {
    ReactDOM.render(<App />, document.getElementById('root'))
}) */