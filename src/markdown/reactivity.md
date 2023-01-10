# 数据响应式

如今的前端开发模式，数据响应式的使用已经非常的普遍了，因为它能让我们的开发更加的简单。概念不在这里说了，直接演示一下怎么在 `vilex` 中使用响应式。

## ref 是什么
`ref` 是一个函数/方法，它接收一个参数，这个参数可以是一个任意类型的数据，并返回一个具有响应式能力的对象（代理对象Proxy)。

下面将分两部分来说明怎么创建一个响应式的数据。

### 创建一个基本类型的响应式数据
在 js 中，基本数据类型有：`undefined`, `null`, `boolean`, `bigInt`, `string`, `symbol`
通过 `ref` 将一个基本的数据类型转化为一个具有响应式对象，使用如下：
```typescript
const bool = ref(true)
const num = ref(0)
const str = ref('')
```

将上面声明的响应式数据应用到一个组件，一个组件的属性，样式类名，文本内容等都支持接收响应式数据，使用如下：
```typescript
div(
    [
        {
            'div-class-name': bool
        }
    ],
    span(num),
    button(
        str,
        {
            disabled: bool
        }
    ),
)
```

接着修改上面定义的变量的值(你可以在一延迟函数中进行测试)，基于基本数据类型定义的响应式数据，修改时需要通过`.value`来改变：
```typescript
bool.value = false
num.value ++
str.value = '测试 ref'
```
这时候你会发现，ui 界面也会跟着同步改变。
需要注意的是，再给组件传递数据的时候，不要使用`.value`，因为那样会失去响应

### 创建一个复杂类型的响应式数据

使用 `object` 和 `array` 来演示复杂数据类型的定义
```typescript
const obj = ref({foo: 'bar'})
const arr = ref(['foo', 'bar'])
```

同样的，将其应用到组件中：
```typescript
    div(
        p(obj.foo),
        button(arr[0])
    )
```

修改它们的值（你可以在延迟函数中来修改测试）
```typescript
obj.foo = 'new bar'
arr[0] = 'new item'
```
从上面可以发现，如果 `ref` 是基于基本数据类型来创建的，当我们修改的时候需要通过`.value`来操作。如果 `ref` 是基于复杂数据类型来创建的话，我们可以不使用 `.value` 来操作数据的改变。


### 将一个 `ref` 响应式数据转化为普通的数据
从上面可以知道，我们的响应式数据其实是一个 `proxy` 对象，那如何拿到这个响应式数据的数据源呢，这里提供了另一个方法 `unref`, 它还有另外一个名字 `unval`，虽然名字不同，但其实对应的是同一个函数。使用的方式也很简单：
```typescript
const s = ref(1)
const o = ref({foo: 'bar'})

console.log(unref(s))
console.log(unref(o))
```
输出结果为：
```shell
1
{foor:'bar'}
```