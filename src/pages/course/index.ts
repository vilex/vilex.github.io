import { aside, css } from 'vilex';
import { regRoute, router } from 'vilex-router';
import { routerView } from 'vilex-router';
import { ViElement } from 'vilex'
import { div } from 'vilex'


import QuickStart  from '../../markdown/quick-start.md'
import  Component  from '../../markdown/component.md'
import  Props  from '../../markdown/props.md'
import  Style  from '../../markdown/style.md'
import  Events  from '../../markdown/events.md'
import  Reactivity  from '../../markdown/reactivity.md'
import  List  from '../../markdown/render-list.md'
import  Router  from '../../markdown/router.md'
import { Markdown } from '../../components/markdown';

interface RouteData {
  title: string
  path: string,
  filePath: string,
  active?: boolean
}


export const mdRoutes: RouteData[] = [
  { title: '快速开始', path: '/d/quick-start', filePath: QuickStart },
  { title: '编写组件', path: '/d/ui', filePath: Component },
  { title: '组件属性', path: '/d/props', filePath: Props },
  { title: '组件样式', path: '/d/style', filePath: Style },
  { title: '组件事件', path: '/d/events', filePath: Events },
  { title: '数据响应', path: '/d/reactivity', filePath: Reactivity },
  { title: '列表渲染', path: '/d/render-list', filePath: List },
  { title: '路由组件', path: '/d/routr', filePath: Router },
]

const SidebarItemStyle = css`
  cursor: pointer;
  white-space: nowrap;
  line-height: 2;
  &:hover {
    color: #ff3399;
  }
`
const SidebarItem = (data: RouteData) => div( data.title, SidebarItemStyle )

  
const setActive = (curr: ViElement, last: ViElement | null) => {
  if (last) {
    last.set({ color: null })
  }
  curr.set({ color: '#ff3399'})
  return last = curr
}



export function course() {
  let selected:ViElement | null = null

  const sidebarUIList = mdRoutes.map(data => {
    const item = SidebarItem(data)
    item.set(
      {
        onclick() {
          router.push(data.path)
          selected = setActive(item, selected)
        }
      }
    )
    return item
  })

  // 根据路由显示对应的内容
  const index = mdRoutes.findIndex(item => window.location.hash.includes(item.path))
  if (index > -1) selected = setActive(sidebarUIList[index], selected)

  
  return div(
    {
      padding: '60px',
      position: 'relative',
      display: 'flex',
      flexDirection: 'row',
      minHeight: '600px',
    },
    [
      aside(
        css`
          position: sticky;
          height: 800px;
          top: 120px;
        `,
        sidebarUIList
      ),
      routerView(
        ...mdRoutes.map(item => regRoute(item.path, () => Markdown(item.filePath)))
      )
    ]

  )
}

