import { INCREMENT,DECREMENT } from './constant'

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
export const createIncrementAction = data =>  ({type:INCREMENT,data})  //如果简写要返回一个对象，在对象外面加个小括号

export const createDecrementAction = data =>  ({type:DECREMENT,data})