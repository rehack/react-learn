import React, { Component } from 'react'

export default class index extends Component {


    state = {mouse:false}
    // 鼠标移入移出
    handleMouse = (flag)=>{
        return ()=>{
            // if (flag) {
            //     console.log('移入');
            // }else{
            //     console.log('移出');
            // }
            this.setState({mouse:flag});
        }
        
    };

    // 删除当前todo
    deleteTodo = ()=>{
        this.props.deleteTodo(this.props.id)
    }
    render() {
        // console.log('props',this.props);
        const {title,done} = this.props;
        return (
            <li onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)} className={this.state.mouse?'active':''}>
                <label>
                    <input type="checkbox" defaultChecked={done}/>
                    <span>{title}</span>
                </label>
                <button onClick={this.deleteTodo} className="btn btn-danger" style={{ display: this.state.mouse?'':'none' }}>删除</button>
            </li>
        )
    }
}
