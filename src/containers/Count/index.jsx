/**
 * 定义一个容器组件
*/
// 引入Count的UI组件
import CountUI from '../../components/Count'
// 引入connect用于连接UI组件和redux
import { connect } from 'react-redux'

// 引入action
import { 
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction 
} from '../../redux/count_action'

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
