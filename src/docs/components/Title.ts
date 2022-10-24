import { h3 } from "vilex"

export function Title(title: TemplateStringsArray) {
  return h3(title[0])
}