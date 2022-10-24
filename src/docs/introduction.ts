import { Page } from './components/Page'
import { PageTitle } from './components/PageTitle'
import { Explain } from './components/Explain'
import { Title } from './components/Title'

export function Introduction() {
  return Page(
    PageTitle(`简介`),
    Title`Vilex 是什么？`,
    Explain`
    Vilex 是一个用来构建前端页面的框架，它让我们可以方便的使用纯 javascript/typesprit 语言来编写我们的页面。
    它将节点的声明使用、样式、属性、事件、子元素作为一个整体的代码块去编写，方便定位元素进行二次开发与维护。
    `,
    Explain`
    Vilex 因为使用的纯 javascript/typescript 语言来开进行开发，所以在开发阶段它给了我们无限的可能，让我们可以
    更加自由的进行设计组合来定义团队和个人的编程习惯。对于这方面能力不太强的团队和成员也可以在不做任何设计的情况下
    按照官方默认的编程风格来进行开发。 
    `
  )
}
