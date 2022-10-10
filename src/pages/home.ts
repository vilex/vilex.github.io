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
                router.push('/course/quick-start')
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
          boxShadow: `0 10px 40px -10px rgb(0 64 128 / 20%)`,
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 33%)',
          gap: '30px',
          justifyContent: 'center'
        },
        [

          Block(
            '使用纯 Typescript 进行开发 '
          ),
          Block(
            '在任意地方声明与使用组件'
          ),
          Block(
            '语法简洁，使用灵活，可应对任何体量的项目'
          )
        ]
      )
    ]
  )
}

function Block(...items: ViHTMLDivElementPart[]) {
  return div(
    ...items,
    {
      backgroundColor: 'rgb(0 64 128 / 20%)',
      width: '100%',
      padding: '30px 0'
    }
  )
}