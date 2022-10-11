import { div, h3, p } from "vilex"
import { code } from '../../../common/code'
export function reactiveityDoc() {
  return div(
    [
      h3(`响应式`),
      code(`
        const count = ref(1)

        span(count)

        button(
            '点击加1',
            {
                onclick() {
                    count.value ++
                }
            }
        )
      `)
    ]
  )
}