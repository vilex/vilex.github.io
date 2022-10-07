import { div, h3, p } from "vilex"
import { regRoute, routerView } from "vilex-router"
import { fastUseDoc } from './contents/fastUseDoc'
import { svgIconDoc } from './contents/svgIconDoc'
import { routerDoc } from './contents/routerDoc'

export function article() {
  return routerView([
    regRoute('/course/fast-use', fastUseDoc),
    regRoute('/course/svg-icon', svgIconDoc),
    regRoute('/course/router', routerDoc),
  ]).set({
    backgroundColor: 'white',
    minHeight: '600px',
    boxShadow: `0 10px 40px -10px rgb(0 64 128 / 20%)`,
    padding: '60px'
  })
}


