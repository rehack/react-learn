import React, { Component } from 'react'
import Item from '../Item'
import './list.css'
export default class List extends Component {
    render() {
        const {todos} = this.props
        return (
            <ul className="todo-main">
                {/* <li>
                    <label>
                        <input type="checkbox" />
                        <span>xxxxx</span>
                    </label>
                    <button className="btn btn-danger" style={{ display: 'none' }}>删除</button>
                </li>
                <Item /> */}
                {
                    todos.map(todo=>{
                        return <Item {...todo} key={todo.id} deleteTodo={this.props.deleteTodo}/>
                    })
                }
            </ul>
        )
    }
}
