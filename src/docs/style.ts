import { Explain } from "./components/Explain"
import { Page } from "./components/Page"
import { PageTitle } from "./components/PageTitle"
import { Title } from "./components/Title"
import './components/Code'
import { Code } from "./components/Code"

export function Style() {
  return Page(
    PageTitle(`样式`),
    Explain
      `
      在我们的前端开发在中，css 样式是我们最重要的组成部分之一。
      所以这部分内容一定要记住了哈😐
      `
    ,
    Explain`来看看在 vilex 项目中怎么使用，下面直接上代码：`,
    Code(`
button(
  '按钮',
  {
    color: 'black',
    padding: '8px 16px',
    '&:hover': {
      color: 'red',
    }
  }
)
    `),
    Explain
      `
      可以看到，我们将样式和按钮绑定在了一起。其实关于这个样式
      与 节点是否要进行分离，在前端领域一直有不同的声音存在。
      我们推荐的方式是这种形式，节点应该是一个完整的内容，包含节点、
      节点样式、节点属性、节点事件、节点样式类（class)。
      `
    ,
    Explain
      `
      可以看到，我们同样支持 class 的设置，也就是说我们其它也是
      支持将样式单独分离出去的。具体是否采用这种方式，可以根据个人
      的需要进行选择，下面我们看一看怎么设置 class
      `
    ,
    Code(`
button(
  '按钮',
  ['class-name', 'button-style']
)
    `),
    Explain`
    值得一提的是，这两种方式是可以共存的，就像这样：
    `,
    Code(`
button(
  '按钮',
  ['class-name', 'button-style'],
  {
    color: 'black',
    padding: '8px 16px',
    '&:hover': {
      color: 'red',
    }
  }
)
    `)
  )
}
