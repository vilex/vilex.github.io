# 列表渲染

我们在单独使用 `响应式` 数据来操作一个列表的增删改查的操作的时候，达不到我们想要的预期。因为 `vilex` 的渲染都动态计算的。
所以有可能并不能提前知道渲染的 item 长什么样。比如下面这样：

```typescript
const arr = ref([])

ul(
    arr.map(t => li(t))
)

arr.push('new item')
```

可以看到，在运行时，我们拿到只是 arr.map 执行后的结果，这处理起来让我们很难去下手。

### list

于是，list 便出现了，使用它来做一个列表的状态保存，使用方式如下

```typescript
const arr = ref([])

ul(
    list(arr, t => li(t))
)

arr.push('new item')
```

