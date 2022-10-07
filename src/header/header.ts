import { div, img, span } from "vilex"
import { blockBackgroundColor } from "../color"
import { nav } from "./nav"

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
      logoImg,
      nav([
        { text: '首页', link: '/' },
        { text: '教程', link: '/course/fast-use' },
        { text: '关于我们', link: '/about-us' },
      ])
    ]
  )
}

function logoImg() {
  return img(
    {
      src: 'src/assets/logo.png',
      alt: 'logo'
    },
    {
      height: '32px',
      width: 'auto'
    }
  )
}

/**
 * @deprecated logo - 纯文字
 */
function logo() {
  return span(
    'vilex',
    {
      fontSize: '16px',
      fontWeight: 'bold',
      fontFamily: 'monospace',
      textShadow: '0 0 3px #FF0000'
    }
  )
}