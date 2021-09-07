import React, { Component } from 'react'
import { connect } from 'react-redux';

import { createPersonAction } from '../../redux/actions/person'

class Person extends Component {

    addPerson = () => {
        const name =this.nameNode.value
        const age = this.ageNode.value
        const personObj = {
            id:new Date()/1000,
            name,
            age
        }
        this.props.createPerson(personObj)

        this.nameNode.value = ''
        this.ageNode.value = ''
    }
    render() {
        // console.log('pp',this.props);
        return (
            <div>
                <h2>我是Person组件,上面求和为：{this.props.count}</h2>
                <input ref={c=>this.nameNode = c } type="text" name="" id="" placeholder="输入姓名" />
                <input ref={c=>this.ageNode = c } type="text" name="" id="" placeholder="年龄" />
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        this.props.rens.map(r=>{
                            return (
                                <li key={r.id}>{r.name}---{r.age}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    state => ({rens:state.person,count:state.count}),//从redux状态中去取数据（就是state），然后通过props传给UI组件
    {
        createPerson: createPersonAction
    }
)(Person)