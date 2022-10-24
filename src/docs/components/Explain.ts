import { p } from "vilex"

export function Explain(text: TemplateStringsArray) {
  return p(
    {
      marginBottom: '1.2em',
      lineHeight: 1.7
    },
    text[0]
  )
}