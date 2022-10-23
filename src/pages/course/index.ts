import { ViElement } from 'vilex'
import { sidebarList } from './../../data/course.data'
import { div, h3, p } from 'vilex'
import { blockBackgroundColor } from '../../color'
import { article } from './article'
import { SideBar } from '../../components/sidebar/sidebar'
import { PageRouter } from '../../docs/components/PageRouter'

export function course() {

  const routes: { path: string, component: () => ViElement }[] = []
  sidebarList.forEach(item => {
    item.list.forEach(item => routes.push(item))
  })
  return div(
    {
      padding: '60px',
      position: 'relative',
      display: 'flex',
      flexDirection: 'row',
      minHeight: '600px',
    },
    [
      SideBar(sidebarList),
      // article().set({
      //   paddingLeft: '60px'
      // }),
      PageRouter(routes)
    ]

  )
}

