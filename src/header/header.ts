import { a, div, img, span } from "vilex"
import { blockBackgroundColor } from "../color"
import { nav } from "./nav"
import logoImgUrl from '../assets/logo.svg'
import githubSvg from '../assets/github.svg'

export function header() {
  return div(
    {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: '0px 60px',
      boxSizing: 'border-box',
    },
    [
      logoImg(),
      div(
        {
          display: 'flex',
          flexDirection: "row",
          alignItems: "center",
        },
        [
          nav([
            { text: '首页', link: '/' },
            { text: '教程', link: '/d/quick-start' },
            { text: '贡献', link: '/about-us' },
          ]),
          a(
            {
              href: 'https://github.com/vilex/vilex',
              target: '_blank'
            },
            {
              marginLeft: '20px'
            },
            [
              img(
                {
                  alt: 'github',
                  src: githubSvg
                },
                {
                  width: '24px',
                  height: '24px'
                }

              )
            ]
          )
        ]
      )
    ]
  )
}

function logoImg() {
  return img(
    {
      src: logoImgUrl,
      alt: 'logo'
    },
    {
      height: '80px',
      width: 'auto'
    }
  )
}
