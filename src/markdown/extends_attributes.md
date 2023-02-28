### 扩展属性

扩展属性可以让我们在节点对象上自定义自己的标识内容或行为方法等。 

比如：

```typescript

const el = div('这是一个div')

const myEl = extendsElement(el, {
    log() {
        console.log('log ...')
    }
})

myEl.extends.log()
```

当我们在编写组件的时候，这个会很有用，可以暴露组件相关的接口

version >= 0.2.8