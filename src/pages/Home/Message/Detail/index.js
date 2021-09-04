import React, { Component } from 'react'

const detailData = [
    {id: 1,content: '消息1内容'},
    {id: 2,content: '消息2内容'},
    {id: 3,content: '消息3内容'},
]

export default class Detail extends Component {
    render() {
        console.log(this.props.match.params); //接收路由params参数
        const {id,title} = this.props.match.params;
        const findResult = detailData.find(i=> i.id===Number(id))
        return (
            <div style={{marginTop:'50px'}}>
                <p>id:{id}</p>
                <p>title:{title}</p>
                <p>content:{findResult.content}</p>
            </div>
        )
    }
}
