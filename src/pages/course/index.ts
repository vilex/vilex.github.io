import { div, h3, p } from 'vilex'
import { blockBackgroundColor } from '../../color'
import { article } from './article'
import { SideBar } from '../../components/sidebar/sidebar'
export function course() {
  return div(
    {
      padding: '60px',
      position: 'relative',
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: 'white',
    minHeight: '600px',
    boxShadow: `0 10px 40px -10px rgb(0 64 128 / 20%)`,
    },
    [
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
              { name: '事件处理', path: '/course/event-handing'},
              { name: '响应式', path: '/course/reactivity'},
            ]
          }
        ]
      ),
      article().set({
        paddingLeft: '60px'
      })
    ]

  )
}

