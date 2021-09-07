import { INCREMENT,DECREMENT } from './constant'
// import store from './store'

/**
 * 该文件专门为Count组件生成action对象
 */

/* function createIncrementAction(data) {
    return {
        type: 'increment',
        data
    }
} */

// 改成箭头函数写法
/* const createDecrementAction = data => {
    return {
        type: 'decrement',
        data
    }
} */

// 箭头函数进行简写
//同步action是指返回的action的值是一个Object一般对象
export const createIncrementAction = data =>  ({type:INCREMENT,data})  //如果简写要返回一个对象，在对象外面加个小括号
export const createDecrementAction = data =>  ({type:DECREMENT,data})

/**
 * 异步action是指返回的action的值是一个function函数
 * 异步action由store直接执行dispatch分派函数
 */
/* export const createIncrementAsyncAction = (data,time) => {
    return () => {
        setTimeout(() => {
            store.dispatch(createIncrementAction(data))
        },time)
    }
} */


// 异步action函数是由store本身调用的，所以无需引入store
// 异步action不是必须使用的

export const createIncrementAsyncAction = (data,time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrementAction(data)) //异步action函数中一般都会调用同步action
        },time)
    }
}