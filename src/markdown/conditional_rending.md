# 条件渲染

在实际的项目开发过程中，有一个很常用的场景，就是根据某个变量对应的不同的值还显示不同的内容。

为了更加方便的使用，这里便将这一普遍性的操作进行了简单的封装，作为一个通过用组件来使用，如下：

```typescript

    const index = ref(0)

    div(
        button('点我切换显示内容', {
            onclick() {
                index.value = Math.floor(Math.random() * 4)
            }
        })
        chooseOneElement(index, [
            div('index 的值是 0 的时候显示我'),
            div('index 的值是 1 的时候显示我'),
            div('index 的值是 2 的时候显示我'),
            div('index 的值是 3 的时候显示我'),
        ])
    )
    
```