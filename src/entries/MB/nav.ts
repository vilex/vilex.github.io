import { Direction, Nav } from '../../components/Nav'
import navOptions from '../../data/nav.data'

navOptions.list = navOptions.list.map(item => {
  item.direction = Direction.vertical
  return item
})

export const nav = Nav(navOptions)
