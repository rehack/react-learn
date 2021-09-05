import React, { Component } from 'react'
// 引入store 用于获取redux中保存的数据
import store from '../../redux/store'
export default class Count extends Component {
    
    // 可以写到全局中去
    /* componentDidMount() {
        // 检测redux中数据变化，redux数据变化就会触发subscribe的回调
        store.subscribe(() => {
            // redux中数据变化，并不会触发react页面的渲染
            this.setState({}) //触发render
        })
    } */

    increment = () => {
        const {value} = this.selectNumber //获取select值
        // 通知redux修改状态
        store.dispatch({
            type: 'increment',
            data:value*1
        })
    }
    decrement = () => {
        const {value} = this.selectNumber //获取select值
        store.dispatch({
            type: 'decrement',
            data:value*1
        })
    }
    incrementIfOdd = () => {
        const {value} = this.selectNumber //获取select值
        if(store.getState() % 2 === 0) return
        store.dispatch({
            type: 'increment',
            data:value*1
        })
    }
    incrementAsync = () => {
        const {value} = this.selectNumber //获取select值
        setTimeout(() => {
            store.dispatch({
                type: 'increment',
                data:value*1
            })
        }, 1000);
    }
    render() {
        return (
            <div>
                <h3>当前求和为：{store.getState()}</h3>
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
