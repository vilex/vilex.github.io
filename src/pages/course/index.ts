import { div, h3, p } from 'vilex'
import { blockBackgroundColor } from '../../color'
import { sidebar } from './sidebar'
import { article } from './article'
import { SideBar } from '../../components/sidebar/sidebar'
export function course() {
  return div(
    {
      padding: '0 60px',
      position: 'relative'
    },
    [
      // sidebar(),

      SideBar(
        [
          {
            name: '开始',
            list: [
              { name: '简介', path: '/course/introduction'},
              { name: '快速上手', path: '/course/quick-start'},
            ]
          },
          {
            name: '基础',
            list: [
              { name: '创建应用', path: '/course/application'},
              { name: '事件处理', path: '/course/event-handing'}
            ]
          }
        ]
      ),
      article()
    ]

  )
}

