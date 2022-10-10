import { div, h3, p } from "vilex"
import { regRoute, routerView } from "vilex-router"
import { fastUseDoc } from './contents/fastUseDoc'
import { svgIconDoc } from './contents/svgIconDoc'
import { routerDoc } from './contents/routerDoc'

export function article() {
  return routerView([
    regRoute('/course/application', fastUseDoc),
    regRoute('/course/svg-icon', svgIconDoc),
    regRoute('/course/router', routerDoc),
  ])
}


