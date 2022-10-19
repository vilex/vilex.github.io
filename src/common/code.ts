import { div, pre } from "vilex"

export function code(str: string) {
  return pre(
    {
      backgroundColor: `rgba(0, 0, 0, 0.7)`,
      color: `rgba(255,255,255)`,
      borderRadius: '5px',
      fontFamily: "Consolas, Monaco, monospace",
      fontWeight: 600,
      letterSpacing: '1px',
      textAlign: 'left',
      padding: '0 30px',
      overflowX: 'auto'
    },
    str
  )
}