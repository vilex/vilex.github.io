import { Code } from "./components/Code"
import { Page } from "./components/Page"
import { PageTitle } from "./components/PageTitle"
import { Title } from "./components/Title"

export function Events() {
  return Page(
    PageTitle(`事件`),
    Title`如何给 节点 添加一个点击事件`,
    Code(`
button(
    '按钮',
    {
        onclick() {
            console.log('click')
        }
    }
)
      `),

    Title`事件回调中获取当前节点元素`,
    Code(`
button(
    '按钮',
    {
        onclick({ vn }) {
            console.log(vn)
        }
    }
)
      `),

    Title`事件回调中获取 event 对象`,
    Code(`
button(
    '按钮',
    {
        onclick({ ev }) {
            console.log(ev)
        }
    }
)
      `),
  )
}