import { div, h3, pre } from "vilex"

interface BlockOptions {
  title: string
  code: string
  bgColor: string
  color: string
}

interface ExampleOptions {
  cols: number
}

export function Example(options: ExampleOptions) {
  return div(
    [
      Block({
        title: '代码',
        code: `
import { div, createApp } from 'vilex'

const app = div('hello vilex')

createApp(App).mount('#app')
        `,
        color: 'white',
        bgColor: 'rgba(0,0,0,0.7)'
      }),

      Block({
        title: '结果',
        code: `
hello vilex
        `,
        color: 'black',
        bgColor: 'rgba(222,222,222,0.7)'
      }),
    ],
    {
      display: 'grid',
      gridTemplateColumns: `repeat(${options.cols})`,
      padding: '60px',
      backgroundColor: 'rgba(255,255,255,.8)',
      margin: '60px 3%',
      // boxShadow: `0 10px 40px -10px rgb(0 64 128 / 20%)`
    }
  )
}




function Block(options: BlockOptions) {
  return div(
    [
      h3(
        options.title,
        {
          color: 'rgba(0,0,0,0.6)'
        }
      ),
      pre(
        options.code,
        {
          backgroundColor: options.bgColor,
          color: options.color,
          borderRadius: '5px',
          fontFamily: "Consolas, Monaco, monospace",
          fontWeight: 600,
          letterSpacing: '1px',
          textAlign: 'left',
          padding: '0 30px'
        }
      ),
    ],
    {
      textAlign: "center",
      // height: '200px'
    }
  )
}