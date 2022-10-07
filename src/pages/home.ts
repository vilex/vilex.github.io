import { button, div, h1, img, p } from "vilex"
import { router } from "vilex-router"
import { blockBackgroundColor } from "../color"

export function home() {
  return div(
    {
      padding: '0 60px'
    },
    [
      div(
        {
          textAlign: 'center',
          backgroundColor: blockBackgroundColor,
          padding: '60px',
          borderRadius: '3px',
          marginTop: '30px',
          boxShadow: `0 10px 40px -10px rgb(0 64 128 / 20%)`
        },
        [
          h1('vilex'),
          p('用于构建用户界面的 javascript 库', {
            lineHeight: '60px'
          }),
          button(
            '快速开始',
            {
              onclick() {
                router.push('/course/fast-use')
              }
            },
            {
              padding: '4px 16px',
              fontWeight: 'bold'
            }
          )
        ]
      ),

      div(
        {
          textAlign: 'center',
          backgroundColor: blockBackgroundColor,
          padding: '60px',
          borderRadius: '3px',
          marginTop: '30px',
          boxShadow: `0 10px 40px -10px rgb(0 64 128 / 20%)`
        },
        [
          p('网站开发中', {
            lineHeight: '60px'
          }),
        ]
      )
    ]
  )
}