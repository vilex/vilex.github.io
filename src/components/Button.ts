import { span } from 'vilex'
import { ViElement } from 'vilex'
import { button } from 'vilex'


export function Button(label: string, ...items: ViHTMLButtonElementPart[]) {
  return button(
    {
      display: 'inline-block',
      borderRadius: '4px',
      color: '#6d6974',
      textAlign: 'center',
      fontSize: '24px',
      transition: 'all .5s',
      cursor: 'pointer',
      margin: '5px',
      border: '2px solid #93e0abe3',
      backgroundColor: 'white',
      padding: '8px 16px'
    },
    [
      span(
        label,
        {
          // onmouseenter({ vn }) {
          //   vn.set({
          //     transform: `scale(0.1)`
          //   })
          // },
          // onmouseleave({ vn }) {
          //   vn.set({
          //     transform: `scale(1)`
          //   })
          // }
        },
        {
          transition: 'all .5s'
        }
      )
    ],
    {
      onmouseenter({ vn }) {
        vn.set({
          backgroundColor: '#93e0ab',
          color: '#49474b'
        })
      },
      onmouseleave({ vn }) {
        vn.set({
          backgroundColor: 'white',
          color: '#6d6974'
        })
      }
    },
    ...items
  )
}