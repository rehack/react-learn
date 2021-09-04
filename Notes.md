### 路由组件与一般组件
* 写法不同
    一般组件： <Todolist/>
    路由组件： <Route path="" component={Component}>
* 存放目录不同
    一般组件：components
    路由组件：pages
* 接收到的props不同
    一般组件：<Todolist/> 组件标签里传递了什么，props就收到什么
    路由组件：接收3个固定的属性 
        history
            go goBack goForward push replace 
        location
            pathname search state 
        match
            params path url