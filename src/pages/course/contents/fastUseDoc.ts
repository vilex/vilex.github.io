import { div, h3 } from "vilex"
import { code } from '../../../common/code'
export function fastUseDoc() {
  return div(
    [
      h3(`通过 cli 快速创建一个基础项目(以 vilex-app 作为项目名)`),
      code(`npx create-vilex-app vilex-app`),
      h3(`cli 执行完成后，进入创建的项目`),
      code(`cd vilex-app`),
      h3(`安装项目依赖`),
      code(`pnpm install`),
      h3(`运行项目`),
      code(`pnpm dev`),
    ]
  )
}