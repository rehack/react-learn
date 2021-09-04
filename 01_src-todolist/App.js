import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import List from './components/List'
import './App.css'

export default class App extends Component {

    state = {
        todos: [
            {
                id:1,
                title: '吃饭',
                done:true
            },
            {
                id:2,
                title: '睡觉',
                done:true
            },
            {
                id:3,
                title: '写代码',
                done:false
            }
        ]
    };

    // 添加一个todolist
    addTodo = (todoObj) => {
        console.log(todoObj);
        // co
        this.setState({
            todos: [todoObj,...this.state.todos]
        })
    }

    deleteTodo = (id)=>{
        console.log(id);
        const idx = this.state.todos.findIndex(i=>i.id===id)
        console.log(idx);
        const {todos} = this.state
        const newTodos = JSON.parse(JSON.stringify(todos))
        newTodos.splice(idx,1)
        console.log(newTodos);
        this.setState({todos: newTodos})
    }


    render() {
        const {todos} = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={todos} deleteTodo={this.deleteTodo} />
                    <Footer />
                </div>
            </div>
        )
    }
}
