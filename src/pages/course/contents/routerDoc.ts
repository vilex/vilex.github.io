import { div, h3, p } from "vilex"
import { code } from "../../../common/code"


export function routerDoc() {
  return div(
    [
      h3(`路由`),
      p(`根据不同的 url 地址来展示不同的页面`),
      h3(`vilex-router`),
      p(`vilex-router 是为 vilex 提供的路由组件`),
      h3(`安装`),
      code(`
pnpm add vilex-router
      `),
      h3(`如何使用`),
      code(`
import { createApp } from 'vilex'
import { routerView } from 'vilex-router'

function App() {
  return div(
    [
      button('跳转到路由1', { onclick() { router.push('/path1' ) } }),
      button('跳转到路由2', { onclick() { router.push('/path2' ) } }),
      // 定义路由显示区
      routerView([
        regRoute('/path1', () => div('router 1 component'))
        regRoute('/path2', () => div('router 2 component'))
      ])
    ]
  )
}

createApp(App).use(createRouter()).mount('#app')
      `)
    ]
  )
}