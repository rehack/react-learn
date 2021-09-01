import React, { Component } from 'react'
import './header.css'
export default class Header extends Component {

    handleKeyup = (e)=>{
        const {keyCode, target} = e
        if(keyCode !== 13) return
        if(target.value.trim() === ''){
            alert('输入不能为空')
            return
        }
        // console.log(target.value,keyCode)

        const todoObj = {
            id:(new Date())/1000,
            title:target.value,
            done:false,
        }
        this.props.addTodo(todoObj)
        target.value = ''
    }
    render() {
        // console.log(this.props);
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyup} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        )
    }
}
