import { ADD_PERSON } from '../constant'

const initState = [
    {id:'01',name:'John',age:19}
] // 初始化状态值 存储person列表

const personReducer = (prevState=initState,action) => {
    console.log('personReducer');
    const {type,data} = action
    switch (type) {
        case ADD_PERSON:
            /**
             * 不能使用prevState.unshift(data)这种方式来添加，push和unshift添加后prevState数组的引用地址并未改变
             * 同时也破坏了reducer为纯函数(参数不能被改写)的原则
             */
            return [data,...prevState] // 添加一条数据，返回的是一个新数组
        default:
            return prevState
    }
}

export default personReducer