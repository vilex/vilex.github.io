import { div } from "vilex"
import { Contents } from "./contents"
import { nav } from "./nav"

export function MB() {
  return div(
    [
      // nav,
      Contents()
    ]
  )
}