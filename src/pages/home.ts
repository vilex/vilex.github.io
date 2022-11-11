import { button, div, h1, img, p, ViHTMLDivElementPart } from "vilex"
import { router } from "vilex-router"
import { blockBackgroundColor } from "../color"
import logoUrl from '../assets/logo.svg'
import { Button } from "../components/Button"

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
          // boxShadow: `0 10px 40px -10px rgb(0 64 128 / 20%)`
        },
        [
          img(
            {
              alt: 'vilex logo',
              src: logoUrl,
            },
            {
              width: '300px',
              height: 'auto'
            }
          ),
          p('用于构建用户界面的 web 框架',
            {
              lineHeight: '60px',
              letterSpacing: '0.2rem',
              fontSize: '1.5rem',
              background: `-webkit-linear-gradient(315deg, rgba(66, 211, 146, 0.3) 25%, rgba(151, 113, 246,0.3))`
            }
          ),
          Button(
            'GET START',
            {
              onclick() {
                router.push('/d/quick-start')
              }
            },
            {
              marginTop: '80px'
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
          marginTop: '100px',
          // boxShadow: `0 10px 40px -10px rgb(0 64 128 / 20%)`,
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 33%)',
          gap: '30px',
          justifyContent: 'center',

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
      display: 'flex',
      flexDirection: "column",
      justifyContent: 'center',
      alignItems: "center",
      backgroundColor: 'rgb(187 190 193 / 20%)',
      width: '100%',
      height: '300px',
      padding: '30px 0',
      borderRadius: '8px',
      backgroundImage: 'radial-gradient(white, #f0f0f0)',
      border: '5px solid #cfe7e9',
      letterSpacing: '2px',
      fontSize: '16px',
      fontWeight: 'bold',
      color: 'rgb(0 0 0 / 68 %)'
    }
  )
}