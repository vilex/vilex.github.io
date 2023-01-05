# 组件通信

#### 父子组件的通信

父组件向子组件传递数据

```typescript

// 父组件
const parentComponent = defineComponent(
    (props) => { 

    }
)

// 子组件
const childComponent = defineComponent(
    (props) => {
        return div(
            props.msg
        )
    }
)

// 
parentComponent(
    childComponent({msg: '这是一个参数'})
)
````