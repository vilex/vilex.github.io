# 编写样式

当一个组件需要应用一些样式时，在 `vilex` 中 有这么几种方式来进行设置，将一一说明。

#### 外部样式表的形式

这种方式和我们在开发一个普通的 html 一样， 建立一个 `.css` 文件，然后 html 把这个 css 文件 link 进来，在我们需要的元素节点上填写在 .css 文件里已经定义好的样式名称。

如下

```css
// test.css
.class-name {
    color: red;
}
```

```typescript
p(
    [ 'class-name' ]
)
```

我们主要关注的是在 `p` 元素中，传入了一个数组，并且我们将在 css 文件中定义好的样式名称放在了这个数组中。是的，就是这样，我们可以在数组中放多个。这时，`p` 元素已经应用了样式。

#### 行内样式

```typescript
p(
    {
        color: 'red'
    }
)
```

这里传入一个对象，对象中可以写所有支持的行内样式。

#### css 模板字符串

```typescript
p( 
    css`
        color: red;
    `
)
```
使用 css 来创建的样式，会自动将些样式写入样式表中并返回一个唯一的类名。

有时候，我们可能要复用同一样个样式。那就需要我们来调整一个代码，将些样式提出来作为一个变量来使用。

```typescript
const redColor = css`color:red;`
p( redColor )
p( redColor )
```

