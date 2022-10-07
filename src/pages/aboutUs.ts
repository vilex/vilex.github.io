import { div, h2, img } from 'vilex';
import { blockBackgroundColor } from '../color'

export function aboutUs() {

  const list = new Array(8)
  list.fill({ name: '虚位以待', url: 'src/assets/zhaopin.jpg' })
  list[0] = { name: '王晓维', url: 'src/assets/wangxiaowei.jpg' }
  list[1] = { name: '杨云龙', url: 'src/assets/yangyunlong.jpg' }

  return div(
    [
      div(
        {
          padding: '0 60px'
        },
        [
          h2('贡献人员', { textAlign: 'center', marginTop: '60px' }),
          div(
            {
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 182px)',
              gridTemplateRows: 'repeat(auto, 232px)',
              justifyContent: 'center',
              gap: '20px',
              textAlign: 'center',
              borderRadius: '3px',
              marginTop: '30px'
            },
            list.map(item => {
              return div(
                {
                  width: '150px',
                  height: '200px',
                  padding: '16px',
                  backgroundColor: blockBackgroundColor,
                  overflow: 'hidden'
                  ,
                  borderRadius: '5px',
                  boxShadow: `0 10px 40px -10px rgb(0 64 128 / 20%)`
                },
                [
                  img(
                    {
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '5px'
                    },
                    {
                      src: item.url,
                      alt: '？？？'
                    })
                ]
              )
            })
          )
        ]
      )

    ]
  )


}