# 组件嵌套

组件嵌套是构成一个页面的结构的最基础的方式。 

#### 普通组件的嵌套
先来看看普通组件的嵌套方式（父子组件），什么是普通组件，在 html 中的标签就可以理解为 vilex 中的普通组件，示例：

```typescript
div(
    ul(
        li('item 1'),
        li('item 2'),
        li('item 3')
    ),
    ul(
        li('content 1'),
        li('content 2'),
        li('content 3')
    )
)
```

#### 自定义组件的嵌套

自定义组件是基于原生标签的扩展，在 vilex 中如何使用，示例：


```typescript
// 自定义一个容器组件，第一个参数是原生标签名字或者是普通组件或自定义组件
// 以 {} 包裹的属性将作为组件的属性
// 以 css`` 的形式作为参数被定义为样式
const container = createElement('div', {/* todo: 属性 */}, css`
    // todo
`)

const myUl = createElement(ul, css`
    color: red;
`)

const myLi = createElement('li', css`
    background-color: green;
`)

container(
    ul(
        myLi('item 1'),
        myLi('item 2'),
        myLi('item 3')
    ),
    myUl(
        li('content 1'),
        li('content 2'),
        li('content 3')
    )
)
```

