import React, { Component } from 'react'

export default class Count extends Component {

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
        // console.log(this.props); // {store: {…}, count: 0, jia: ƒ}
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
