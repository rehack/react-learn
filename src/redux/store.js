// 该文件专门用于暴露一个store对象，整个应用只有一个store对象

import { createStore,applyMiddleware,combineReducers } from 'redux'

// 引入reducer
import countReducer from './reducers/count'
import personReducer from './reducers/person'


// redux-thunk用于支持异步action
import thunk from 'redux-thunk'

// 合并多个reducer

const allReducers = combineReducers({
    count: countReducer,
    person: personReducer,
})




// 暴露store
export default createStore(allReducers,applyMiddleware(thunk))
