import { h1, hr } from "vilex"

export function PageTitle(title: string) {
  return h1(
    title,
    [
      hr({
        margin: '60px 0',
        opacity: 0.4
      })
    ]
  )
}