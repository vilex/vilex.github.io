import { div, pre } from "vilex"

export function code(str: string) {
  return pre(
    {
      padding: `10px 10px`,
      backgroundColor: `rgba(57,80,58, 0.9)`,
      letterSpacing: `0.1rem`,
      color: `rgba(255,255,255)`,
      borderRadius: `4px`,
      fontWeight: '600'
    },
    str
  )
}