/**
 * 1.该文件的作用是用于创建一个为Count组件服务的reducer,reducer的本质是一个函数
 * 2.reducer函数接收2个参数：之前的状态（prevState）,动作对象（action）
 */

import { INCREMENT,DECREMENT } from './constant'

const initState = 0 // 初始状态值
export default function countReducer(prevState=initState, action){
    // console.log(prevState,action); // 0 {type: "@@redux/INIT0.k.4.v.v.v"}
    // 从action对象中获取type,data
    const {type, data} = action;

    // 根据type决定如何加工数据
    switch (type) {
        case INCREMENT:
            return prevState + data; //有return 可以不需要break
        case DECREMENT:
            return prevState - data;
        default:
            return prevState
    }
} 