
# 属性设置

有时候我们需要给 `dom节点` 元素设置属性，在日常的开发中，每一个项目基本上都会用到，比如，我想给 `input` 添加 `value`。 下面我来演示在 `vilex` 中怎么设置：

```typescript
input( { value: 'input content' } )
```

可以看到，我们在 `input` 小括号里增加了 `{ value: 'input content' }`, 就是这种形式，它接收一个对象，vilex 会自己将它识别成属性值并将它应用到 `dom节点` 上。

> 后面我们会看到行内样式的设置也是通过接收一个对象，别担心，`vilex` 内部会自动识别这是一个属性的对象，还是一个行内样式的对象，这里先有一个印象即刻，后面还会对这部分进行说明。


我们再来演示一个 `img` 的属性设置，所有的元素节点的设置都是大同小异的：

```typescript
img( 
    {
        alt: 'This is a img',
        src: 'https://image.example.com/img.png'
    } 
)
```
