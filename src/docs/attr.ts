import { Code } from "./components/Code"
import { Explain } from "./components/Explain"
import { Page } from "./components/Page"
import { PageTitle } from "./components/PageTitle"

export function Attr() {
  return Page(
    PageTitle('属性'),
    Explain`节点的属性与原生标签的属性也是一致的设计，
    比如我们想要给一个 button 添加一个 id 为 mybutton 的属性。
    `,
    Explain`我们可以这样做：`,
    Code(`
button(
  '按钮',
  {
    id: 'mybutton'
  }
)
    `),
    Explain`给一个 img 设置 src 属性`,
    Code(`
img({
  alt: '图片',
  src: 'https://vilex.github.io/img.png'
})
    `)
  )
}