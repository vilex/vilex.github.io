import { div } from "vilex";
import { regRoute } from "vilex-router";
import { routerView } from "vilex-router";
import { header } from "../header/header";
import { aboutUs } from "../pages/aboutUs";
import { course } from "../pages/course";
import { home } from "../pages/home";

export function PC() {
    return div(
        {
            margin: `0 auto`
        },
        [
            header(),
            routerView([
                regRoute('/home', home, true),
                regRoute('/course', course),
                regRoute('/about-us', aboutUs)
            ])
        ]
    )
}