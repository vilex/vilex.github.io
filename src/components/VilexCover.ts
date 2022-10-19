import { div, h1, p } from "vilex"

export function VilexCover() {
  return div(
    [
      h1(
        'VILEX',
        {
          fontFamily: "monospace",
          display: "inline-block",
          fontWeight: "bold",
          color: "rgba(0,0,0,0.8)",
          textShadow: '0 0 1px currentColor,-1px -1px 1px #000,0 -1px 1px #000,1px -1px 1px #000,1px 0 1px #000,1px 1px 1px #000,0 1px 1px #000,-1px 1px 1px #000,-1px 0 1px #000',
          fontSize: '6em',
          // opacity: .5
        }
      ),
      p(
        '一个用于快速构建前端界面的Javascript库',
        {
          fontSize: '2em',
          color: 'rgba(0,0,0,0.6)'
        }
      )
    ],
    {
      display: 'flex',
      justifyContent: 'center',
      alignItems: "center",
      flexDirection: "column",
      // backgroundColor: 'white'
    }
  )
}