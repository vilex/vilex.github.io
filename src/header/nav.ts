import { li, ref, ul } from "vilex"
import { router } from "vilex-router"

interface NavData {
  text: string
  link: string
}

export function nav(list: NavData[]) {
  return ul(
    list.map(
      item => li(
        item.text,
        {
          onclick() {
            console.log(`click`)
            router.push(item.link)
          },
          onmouseenter({ vn }) {
            vn.set({
              textDecoration: 'underline'
            })
          },
          onmouseleave({ vn }) {
            vn.set({
              textDecoration: 'none'
            })
          }
        },
        {
          cursor: 'pointer',
          listStyle: 'none',
          display: 'inline-block',
          padding: '2px 4px',
          lineHeight: '44px',
          color: '#000',
          // fontWeight: 'bold'
          marginLeft: '20px'
        }
      )
    )
  )
}