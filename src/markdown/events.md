# 事件处理

事件的处理非常的重要，没有他们就没有人机交互。 

但在 `vilex` 中使用它也很简单，比较我们想要给一个按钮添加一个点击事件，这是最常见的一个功能：

```typescript
button(
    `hit me`
    {
        onclick() {
            console.log('bom bom')
        }
    }
)
```

有时候我们还想要拿到 `event`:

```typescript
button(
    `hit me`
    {
        onclick({ ev }) {
            console.log(ev)
        }
    }
)
```

我们还可以在点击事件里拿到自身节点:

```typescript
button(
    `hit me`
    {
        onclick({ vn }) {
            console.log(vn)
        }
    }
)
```

其它的事件也一样，像 `onmousedown`、`onmouseup` ...等等，写法完全一样。