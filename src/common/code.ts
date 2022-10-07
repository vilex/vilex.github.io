import { div } from "vilex"

export function code(str: string) {
  return div(
    {
      padding: `10px 10px`,
      backgroundColor: `rgb(57,80,58)`,
      letterSpacing: `0.1rem`,
      color: `rgba(255,255,255)`,
      borderRadius: `4px`,
      fontWeight: '600'
    },
    str
  )
}