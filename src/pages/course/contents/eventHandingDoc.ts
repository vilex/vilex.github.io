import { div, h3 } from "vilex"
import { code } from '../../../common/code'
export function eventHandingDoc() {
  return div(
    [
      h3(`如何给 节点 添加一个点击事件`),
      code(`
button(
    '按钮',
    {
        onclick() {
            console.log('click')
        }
    }
)
      `),
      
      h3(`事件回调中获取当前节点元素`),
      code(`
button(
    '按钮',
    {
        onclick({ vn }) {
            console.log(vn)
        }
    }
)
      `),

      h3(`事件回调中获取 event 对象`),
      code(`
button(
    '按钮',
    {
        onclick({ ev }) {
            console.log(ev)
        }
    }
)
      `),
    ]
  )
}