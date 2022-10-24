import { Page } from './components/Page'
import { PageTitle } from './components/PageTitle'
import { Explain } from './components/Explain'
import { Title } from './components/Title'
import { Code } from './components/Code'

export function VilexNode() {
  return Page(
    PageTitle(`节点`),
    Title`什么是节点呢？`,
    Explain`
    我们知道，在html中有 div, input, button ... 等等这样的标签，这个标签其实就是我们的节点。
    不同的是，我们这里的节点是用一个自定义的js对象自己来保存的。
    `,
    Title`那我们怎么创建一个节点呢？`,
    Explain`
    vilex 提供了一个 createElement 方法用来定义节点。假如我们想要创建一个 button 按钮，
    那么我们可以这样做：
    `,
    Code(`
createElement('button', [
  '按钮'
])
    `),
    Explain`如果你感觉面创建的方式有点麻烦（字太多了），别但心，这里还有更简单的方式
    用来创建不同的节点：
    `,
    Code(`
button('按钮')
    `),
    Explain`你只需要这样，就实现了和上一步完全一样的效果`,
    Title`节点关系`,
    Explain`节点关系主要是指节点与节点之间的父子级关系，比如一个 ul 节点下有两个 li 节点，
    我们用这样的代码方式来描述他们的关系：
    `,
    Code(`
ul(
  li('第一个li'),
  li('第二个li')
)
    `),
    Explain`这种嵌套关系和我们的 html 标签嵌套保持一致。
    所以在我们开发的时候，可以随意的进行嵌套，是没有任何限制的。
    `
  )
}
