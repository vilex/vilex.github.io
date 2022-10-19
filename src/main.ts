import { button, createApp, div, hr, img, input, ref, span, store, svg } from "vilex"
import { createRouter, regRoute, routerView } from "vilex-router"
import './normal.css'
import { PC } from "./entries/PC"
import { MB } from "./entries/MB"


let h = window.innerWidth > window.innerHeight
function App() {
    return h
    ? PC()
    : MB()
}



createApp(App).use(createRouter()).mount('#app')


window.addEventListener('resize', () => {
    const nh = window.innerWidth > window.innerHeight
    if (h != nh) {
        h = nh
        window.location.reload()
    }
})

