import { ADD_PERSON } from '../constant'

const initState = [
    {id:'01',name:'John',age:19}
] // 初始化状态值 存储person列表

const personReducer = (prevState=initState,action) => {
    console.log('personReducer');
    const {type,data} = action
    switch (type) {
        case ADD_PERSON:
            return [data,...prevState] // 添加一条数据
        default:
            return prevState
    }
}

export default personReducer