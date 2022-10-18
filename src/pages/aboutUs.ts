import { h3 } from 'vilex';
import { span } from 'vilex';
import { div, h2, iframe, img } from 'vilex';
import { blockBackgroundColor } from '../color'
import { contributors } from '../static_data/contributors';


export function aboutUs() {

  // const contributors = []
  // console.log(contributors)

  return div(
    {
      padding: `15px`
    },
    contributors.map(
      item => div(
        [
          h2(item.repo),
          ...item.list.map(
            item => div(
              [
                img(
                  {
                    alt: 'avatar',
                    src: item.avatar_url
                  },
                  {
                    width: '60px',
                    height: '60px',
                  }
                ),
                span(item.login, { marginLeft: '30px'})
              ],
              {
                boxShadow: `0 10px 40px -10px rgb(0 64 128 / 20%)`,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'
                ,marginBottom: '10px'
              }
            )
          )
        ]
      )
    )
  )

}
