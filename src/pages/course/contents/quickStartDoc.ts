import { div, h3, p } from "vilex"
import { code } from '../../../common/code'
export function quickStartDoc() {
  return div(
    [
      h3(`节点`),
      p(`
        在 vilex 中，最核心的要素是节点，类似 dom 中的 div, button, input ...
      `),
      p(
        `为了更方便的操作， vilex 提供了一套与原生 dom 标签一致的名称，下面用一个简单的例子来说明在 vilex 中如何创建一个按钮`
      ),
      code(`
        button('按钮')
      `),
      p(`
        这样我们创建了一个按钮实例，等同于 <button>按钮</button>
      `),
      h3(`样式类名`),
      p(`
        下面来看看怎么给这个节点设置类名
      `),
      code(`
        button(
            '按钮',
            [ 'class-name-1', 'class-name-2' ]
        )
      `),
      p(`
        如上所示，节点接受一个参数，为字符串数组类型的参数，这个数组将会被识别为样式类名
      `),
      h3(`属性`),
      p(`接下来看看如何设置属性`),
      code(`
        button(
            '按钮',
            {
                disabled: false
            }
        )
      `),
      p(`如此，我们便禁用了此节点`),
      h3(`行内样式`),
      code(`
        button(
            '按钮',
            {
                padding: '8px 16px'
            }
        )
      `),
      h3('子元素'),
      p(`
        下面创建一个 ul 节点， 并且给 ul 节点添加多个 li 子节点
      `),
      code(`
        ul(
            [
                li('节点'),
                li('节点'),
                li('节点'),
                li('节点'),
            ]
        )
      `)
    ]
  )
}