import { div, h3, p } from 'vilex'
import { blockBackgroundColor } from '../../color'
import { sidebar } from './sidebar'
import { article } from './article'
export function course() {
  return div(
    {
      padding: '0 60px',
      position: 'relative'
    },
    [
      sidebar(),
      article()
    ]

  )
}

