import React, { Component } from 'react'

// 引入connect用于连接UI组件和redux
import { connect } from 'react-redux'

// 引入action
import { 
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction 
} from '../../redux/count_action'


// 定义Count的UI组件
class CountUI extends Component {

    increment = () => {
        const {value} = this.selectNumber //获取select值
        this.props.jia(value*1)
    }
    decrement = () => {
        const {value} = this.selectNumber //获取select值
        this.props.jian(value*1)
    }
    incrementIfOdd = () => {
        const {value} = this.selectNumber //获取select值
        if(this.props.count % 2 !== 0){
            this.props.jia(value*1)
        }
    }
    incrementAsync = () => {
        const {value} = this.selectNumber //获取select值
        this.props.jiaAsync(value*1,1000)
    }
    render() {
        console.log(this.props); // {store: {…}, count: 0, jia: ƒ}
        return (
            <div>
                <h3>当前求和为：{this.props.count}</h3>
                <select ref={c=>this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>当前和为奇数时加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button> 
            </div>
        )
    }
}



/**
 * 1.mapStateToProps函数返回的是一个一般对象
 * 2.返回的对象中的key作为传递给UI组件props的key，value作为传递给UI组件props的value
 * 3.mapStateToProps函数用于传递状态，把state映射到props
 */
// const mapStateToProps = state => ({ count:state })

/**
 * 1.mapDispatchToProps函数返回的是一个一般对象
 * 2.返回的对象中的key作为传递给UI组件props的key，value作为传递给UI组件props的value
 * 3.mapStateToProps函数用于传递操作状态的方法，把dispatch（操作状态的方法）映射到props
 */
/* const mapDispatchToProps = dispatch => (
    {
        jia: number=> dispatch(createIncrementAction(number)),
        jian: number=> dispatch(createDecrementAction(number)),
        jiaAsync: (number,time)=> dispatch(createIncrementAsyncAction(number,time))
    }
) */



// const CountContainer = connect()(CountUI) //connect函数里的返回值还是一个函数
// export default CountContainer


// export default合并书写形式
// 使用connect()()创建并暴露一个Count的容器组件
/**
 * 定义一个容器组件
*/
export default connect(
    state => ({ count:state }),

    // mapDispatchToProps的一般写法
    /* dispatch => (
        {
            jia: number=> dispatch(createIncrementAction(number)),
            jian: number=> dispatch(createDecrementAction(number)),
            jiaAsync: (number,time)=> dispatch(createIncrementAsyncAction(number,time))
        }
    ) */

    // mapDispatchToProps的简写
    {
        jia:createIncrementAction,
        jian:createDecrementAction,
        jiaAsync:createIncrementAsyncAction
    }


)(CountUI) //connect函数里的返回值还是一个函数
