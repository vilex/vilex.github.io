# 路由组件

使用路由组件前，需要先安装一下这个库

```shell
pnpm add vilex-router
```

在创建 vilex 应用时，需要将 router 传递给 vilex， 就像下面这样：

```typescript
createApp(() => div('VilexApp'))
    .use(createRouter()) // 这里，固定写法
    .mount('#app')
```

在我们想要做路由内容切换的地方放置一个 `routerView`

```typescript
routerView(
    regRoute('/home', () => div('home view'))
    regRoute('/about', () => div('about view'))
)
```

routerView 和其它如 `div` 并也没什么区别，也是做一个组件或元素节点而存在，所以它可以像 `div` 一样放在任何合适的场景下。


#### 跳转路由

跳转路由可以使用:

```typescript
router.push('/about')
```

## 路由传参

第一步，先定义一个路由组件:
```typescript
routerView(
    regRoute('/foo', (args) => {
        console.log(args)
        return div(`存在路由参数`)
    }),
    regRoute('/bar', () => {
        return div(`没有路由参数`)
    }),
)
```

第二步，跳转路由并携带参数：
```typescript
router.push('/foo', {name: '我的参数'})
```

最后可以根据得到参数信息被打印出来
