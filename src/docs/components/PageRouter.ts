import { regRoute } from 'vilex-router'
import { ViElement } from 'vilex'
import { routerView } from 'vilex-router'

export function PageRouter(list: { path: string, component: () => ViElement }[]) {
  return routerView(
    list.map(routeConf => regRoute(routeConf.path, routeConf.component))
  )
}