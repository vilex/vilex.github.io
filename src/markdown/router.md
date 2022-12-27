# 路由组件

使用路由组件前，需要先安装一下这个库

```shell
pnpm add vilex-router
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