import { button, createApp, div, hr, img, input, ref, span, store, svg } from "vilex"
import { createRouter, regRoute, routerView } from "vilex-router"
import './normal.css'
import { PC } from "./entries/PC"
import { MB } from "./entries/MB"





function App() {

    return window.innerWidth > window.innerHeight
    ? PC()
    : MB()
}



createApp(App).use(createRouter()).mount('#app')

