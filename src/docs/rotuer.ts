import { Code } from "./components/Code"
import { Explain } from "./components/Explain"
import { Page } from "./components/Page"
import { PageTitle } from "./components/PageTitle"
import { Title } from "./components/Title"

export function Router() {
  return Page(
    PageTitle(`路由`),
    Explain`根据不同的 url 地址来展示不同的页面`,
    Title`vilex-router`,
    Explain`vilex-router 是为 vilex 提供的路由组件`,
    Explain`安装路由`,
    Code(`
pnpm add vilex-router
      `),
    Explain`如何使用?`,
    Code(`
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
  )
}