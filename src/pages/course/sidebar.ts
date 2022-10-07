import { li, ul } from "vilex"
import { router } from "vilex-router"

interface Li {
  label: string
  link: string
}

const list: Li[] = [
  { label: '快速使用', link: '/course/fast-use' },
  { label: '图标', link: '/course/svg-icon' },
  { label: '路由', link: '/course/router' }
]

export function sidebar() {
  return ul(
    {
      position: 'absolute',
      left: '-60px',
      width: '80px',
      padding: '10px',
      backgroundColor: 'white',
      boxShadow: `0 10px 40px -10px rgb(0 64 128 / 20%)`
    },
    list.map(item => li(
      item.label,
      {
        onclick() {
          router.push(item.link)
        }
      },
      {
        listStyle: 'none',
        cursor: 'pointer',
        lineHeight: '2rem'
      }
    ))
  )
}