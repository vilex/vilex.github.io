import { div, img, span } from "vilex"
import { contributors } from "../static_data/contributors"

export function Contributors() {
  return div(
    {
      display: "flex",
      flexDirection: 'row',
      justifyContent: "space-around"
    },
    contributors.map(
      item => div(
        [
          // h2(item.repo),
          ...item.list.map(
            item => div(
              [
                img(
                  {
                    alt: 'avatar',
                    src: item.avatar_url,
                  },
                  {
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%'
                  }
                ),
                span(item.login, {})
              ],
              {
                // boxShadow: `0 10px 40px -10px rgb(0 64 128 / 20%)`,
                display: 'flex',
                flexDirection: "column",
                alignItems: 'center',
                marginBottom: '10px',
                justifyContent: 'center',
                textAlign: 'center'
              }
            )
          )
        ],
        {
          display: "flex",
          flexDirection: "row",
          width: '100%',
          justifyContent: 'center',
          columnGap: '20px',
          flexWrap: 'wrap'
        }
      )
    )
  )

}