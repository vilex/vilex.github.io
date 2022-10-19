import { div, hr } from "vilex"
import { eventHandingDoc } from "../../pages/course/contents/eventHandingDoc"
import { fastUseDoc } from "../../pages/course/contents/fastUseDoc"
import { quickStartDoc } from "../../pages/course/contents/quickStartDoc"
import { reactiveityDoc } from "../../pages/course/contents/reactivityDoc"
import { routerDoc } from "../../pages/course/contents/routerDoc"

export function Docs() {
  return div(
    [

      fastUseDoc(),
      hr({
        opacity: 0.6,
        margin: '60px 20px'
      }),
      quickStartDoc(),
      hr({
        opacity: 0.6,
        margin: '60px 20px'
      }),
      reactiveityDoc(),
      hr({
        opacity: 0.6,
        margin: '60px 20px'
      }),
      eventHandingDoc(),
      hr({
        opacity: 0.6,
        margin: '60px 20px'
      }),
      routerDoc()
    ],
    {
      padding: '60px',
      backgroundColor: 'rgba(255,255,255,.8)',
      margin: '60px 3%',
      boxShadow: `0 10px 40px -10px rgb(0 64 128 / 20%)`
    }
  )
}