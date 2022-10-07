import { button, createApp, div, hr, img, input, ref, span, store, svg } from "vilex"
import { nav } from "./header/nav"
import { header } from "./header/header"
import { createRouter, regRoute, routerView } from "vilex-router"
import { home } from "./pages/home"
import './normal.css'
import { course } from "./pages/course"
import { aboutUs } from "./pages/aboutUs"

function App() {
    return div(
        {
            width: `1200px`,
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

createApp(App).use(createRouter()).mount('#app')

