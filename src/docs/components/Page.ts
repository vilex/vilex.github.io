import { div, ViElement } from "vilex"

export function Page(...chils: ViElement[]) {
  return div(
    {
      padding: '0 60px'
    },
    chils
  )
}