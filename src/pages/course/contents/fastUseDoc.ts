import { div, h3 } from "vilex"
import { code } from '../../../common/code'
export function fastUseDoc() {
  return div(
    [
      h3(`通过命令行快速创建一个基础的模板项目`),
      code(`
        npx create-vilex-app <project-direction>
        
        // 创建完成后，进入项目
        cd <project-direction>

        // 安装依赖，并运行
        pnpm install && pnpm dev
      `)
    ]
  )
}