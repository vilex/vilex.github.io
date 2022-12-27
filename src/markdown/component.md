# 编写组件

我们在编写 `html` 的时候，会用到各种各样的标签。比如下面这样：

```html
<div>
  <p>text content</p>
  <button>button</button>
</div>
```

在 `vilex` 的开发中，我们使用 `Typescript` (推荐) 来开发， 我们可以通过 `vilex` 导出的 `div`、`p`、`button` .. 等来完成上面的同样的效果，如下：

```typescript
div(
  p('text content'),
  button('button')
)
```

## 扩展标签

扩展标签可以让我们基于扩展一个原生标签的样式，属性，比如，我想让一个扩展一个按钮，将它的边框改为红色，我们可以这样做

```typescript
const MyButton = createElement('button', css`
  border-color: red;
`)

div(
  p('text content'),
  MyButton('button')
)
```

同样的，我们也可以扩展一个标签的属性

```typescript
const MyButton = createElement('button', { disabled: false }, css`
  border-color: red;
`)

div(
  p('text content'),
  MyButton('button')
)

```

## 定义组件

`defineComponent` 用来定义一个组件，hmr 将会寻找由 `defineComponent` 来定义的组件来进行热更新。开发环境下，也会给此最外层组件添加一个 `v-component-name` 属性。在语法上可以比较明确一个组件的界线。 如果你不使用，除了上面说的三种情况，在运行时不会有任务影响，我们来对比一下使用 `defineComponent` 和不使用 `defineComponent` 的写法

```typescript

// 不使用 defineComponent
export const MyComponent1 = () = div(
  p('text content'),
  button('button')
)

// 使用 defineComponent
export const MyComponent2 = defineComponent(() => div(
  p('text content'),
  button('button')
))

```

主要影响范围：hmr
