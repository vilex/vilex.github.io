import {  createApp } from "vilex"
import { createRouter, regRoute, routerView } from "vilex-router"
import './normal.css'
import { PC } from "./entries/PC"

createApp(PC).use(createRouter()).mount('#app')


