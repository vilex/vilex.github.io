# 数据响应式

如今的前端开发模式，数据响应式的使用已经非常的普遍了，因为它能让我们的开发更加的简单。概念不在这里说了，直接演示一下怎么在 `vilex` 中使用响应式。

### ref

```typescript
const count = ref(0)
```

上面声明了一个响应式的变量，现在我们把 `count` 应用到一个文本上：

```typescript
p( count )
```

现在再添加一个按钮，并且点击按钮的时候，让这个文本的内容累加：

```typescript
button(
    `accrual`，
    {
        onclick() {
            count.value ++
        }
    }
)
```

当点击按钮的时候，改变 `count` 的值，`ref` 是用来将 `number`、`string`、`boolean` 这些值类型的数据转变成一个响应式的数据。
当我们需要手动去修改由 `ref` 来创建的响应式数据时，需要通过 `.value` 来修改。 
如果是要将这个响应式的数据应用到 `vilex` 的节点上时，直接将变量传入即可，不要使用`.value`, 因为这样会失去响应。


### ref

`ref` 还可以将一个对象变为响应式数据

```typescript
const data = ref({
    count : 0
})

p( data.count )

button(`accrual`, {
    onclick() {
        data.count ++
    }
})
```

对于数组来说，也是一样的

```typescript
const arr = ref([1,2,3])

p( arr[2] )

arr[2] = 8
```
