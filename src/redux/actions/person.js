import {ADD_PERSON} from '../constant'

// 创建一个添加person的action动作对象
export const createPersonAction = (personObj) => ({type: ADD_PERSON,data:personObj})