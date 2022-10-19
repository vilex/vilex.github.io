import { div } from "vilex"
import { regRoute, routerView } from "vilex-router"
import { Contributors } from "../../components/Contributors"
import { Example } from "../../components/Example"
import { VilexCover } from "../../components/VilexCover"
import { Docs } from "./Docs"
import { Contribution } from "./pages/Contribution"
import { Course } from "./pages/Course"
import { Home } from "./pages/Home"

export function Contents() {

  return div(
    [
      VilexCover(),
      Example({
        cols: 1
      }),
      Docs(),
      Contributors()
    ],
    {
      display: "flex",
      flexDirection: "column",
      marginBottom: '100px'
    }
  )
  return routerView([
    regRoute('/home', Home),
    regRoute('/course', Course),
    regRoute('/about-us', Contribution)
  ])
}