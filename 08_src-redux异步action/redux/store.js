// 该文件专门用于暴露一个store对象，整个应用只有一个store对象

import { createStore,applyMiddleware } from 'redux'
// 引入reducer
import countReducer from './count_reducer'
// redux-thunk用于支持异步action,使用redux-thunk必须使用react中间件
import thunk from 'redux-thunk'
// 暴露store
export default createStore(countReducer,applyMiddleware(thunk))
