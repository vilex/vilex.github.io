import { ViElement } from "vilex"
import { Attr } from "../docs/attr"
import { Events } from "../docs/events"
import { Introduction } from "../docs/introduction"
import { QuickStart } from "../docs/quick-start"
import { Router } from "../docs/rotuer"
import { Style } from "../docs/style"
import { VilexNode } from "../docs/vilex-node"


interface Options {
  name: string
  list: {
    name: string
    path: string
    component: () => ViElement
  }[]
}

export const sidebarList: Options[] = [
  {
    name: '快速使用',
    list: [
      {
        name: '简介',
        path: '/course/introduction',
        component: Introduction
      },
      {
        name: '快速使用',
        path: '/course/quick-start',
        component: QuickStart
      },
    ]
  },
  {
    name: '基础',
    list: [
      {
        name: '节点',
        path: '/course/vilex-node',
        component: VilexNode
      },
      {
        name: '样式',
        path: '/course/style',
        component: Style
      },
      {
        name: '属性',
        path: '/course/attr',
        component: Attr
      },
      {
        name: '事件',
        path: '/course/events',
        component: Events
      },
    ]
  },
  {
    name: '路由',
    list: [
      {
        name: '路由',
        path: '/course/router',
        component: Router
      },

    ]
  },
]