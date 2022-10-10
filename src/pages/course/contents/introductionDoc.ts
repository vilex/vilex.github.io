import { div, h3, p } from "vilex"
import { code } from '../../../common/code'
export function introductionDoc() {
  return div(
    [
      h3(`简介`),
      p(`
        vilex 可以帮助你快速开发前端项目
      `)
    ]
  )
}