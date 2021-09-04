import React, { Component } from 'react'
import { Link,Route } from 'react-router-dom'
import Detail from './Detail'


export default class Message extends Component {
    state = {
        messageData:[
            {id:1,title:'消息1'},
            {id:2,title:'消息2'},
            {id:3,title:'消息3'}
        ],
        currentMessage:''
    }

    // 显示消息详情
    handleShowMessage = (id) => {
        return () => {
            const tit = this.state.messageData.find(i=>i.id===id).title
            this.setState({
                currentMessage:tit
            })
        }
    }
    render() {
        const {messageData} = this.state
        return (
            <div>
                <ul>
                    {
                        messageData.map(msg => {
                            return (
                                // {/* 通过点击事件展示详情  */}
                                // <li key={msg.id} onClick={this.handleShowMessage(msg.id)}>{msg.title}</li> 
                                // 
                                <li key={msg.id}>
                                    {/* 向路由组件传递params参数 */}
                                    <Link to={`/home/message/detail/${msg.id}/${msg.title}`}>{msg.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <div>
                    {/* {this.state.currentMessage} */}

                    {/* 声明接收路由params参数 */}
                    <Route path="/home/message/detail/:id/:title" component={Detail}></Route>
                </div>
            </div>
        )
    }
}
