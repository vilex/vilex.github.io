import { Explain } from "./components/Explain"
import { Page } from "./components/Page"
import { PageTitle } from "./components/PageTitle"
import { Title } from "./components/Title"
import './components/Code'
import { Code } from "./components/Code"

export function QuickStart() {
  return Page(
    PageTitle(`快速开始`),
    Explain
      `一开始的千言万语，不如直接跟着我接下来的几步来创建一个基础应用来的实在。
      下面我们一起来看看怎么快速创建一个应用
      `
    ,
    Explain`em... 别担心，这里我们有提供一个小工具，一行命令就搞定 😏`,
    Code(`
npx crate-vilex-app vilex-demo
    `),
    Explain
      `然后就没有然后了， 命令执行完成后，你将会在当前目录下看到一个 vilex-demo 目录。
      这个就是我们 vilex 项目啦。其中，命令行中的 vilex-demo 是目录名，
      你可以改成你需要的名称。
      `
    ,
    Explain
      `既然项目已经创建完成了，那我们总要看一看我们的项目吧，这时候就和其它普通的项目一样了。`
    ,
    Explain
      `我们在进行到项目目录中，按装我们项目所需要的依赖包，然后把项目启动起来，
      就可以看到我们默认的 vilex 项目所带的页面了。
      `
    ,
    Explain
      `那具体怎么操作呢，还是用我们的命令行，具体如下：`
    ,
    Code(`
cd vilex-demo && pnpm install
    `),
    Explain
      `上面的命令的意思是：进入到项目目录中并且安装项目所需要的依赖包。`
    ,
    Explain
      `最后再执行我们的启动项目的命令：`
    ,
    Code(`
pnpm dev
    `),
    Explain`
      不出意外，这时候你会在命令行工具中看到这样的成功消息：
    `,
    Code(`
➜  Local:   http://localhost:3000/
➜  Network: use --host to expose
    `),
    Explain`复制 http://localhost:3000/ 在浏览器打开，如果看到页面中有内容，
    那说明你已经成功了。你可以尝试用一个编辑器（推荐 vscode）打开我们的项目，
    随便试着改一改，再看看页面中的变化。
    `
  )
}
