import { div, h3, p } from "vilex"
import { regRoute, routerView } from "vilex-router"
import { fastUseDoc } from './contents/fastUseDoc'
import { svgIconDoc } from './contents/svgIconDoc'
import { routerDoc } from './contents/routerDoc'
import { eventHandingDoc } from "./contents/eventHandingDoc"
import { quickStartDoc } from "./contents/quickStartDoc"
import { introductionDoc } from "./contents/introductionDoc"

export function article() {
  return routerView([
    regRoute('/course/application', fastUseDoc),
    regRoute('/course/svg-icon', svgIconDoc),
    regRoute('/course/router', routerDoc),
    regRoute('/course/event-handing', eventHandingDoc),
    regRoute('/course/quick-start', quickStartDoc),
    regRoute('/course/introduction', introductionDoc),
  ])
}


