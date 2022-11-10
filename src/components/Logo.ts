import { toPx } from './../utils/toPx';
import { img } from "vilex";
import LogoPath from '../assets/logo.svg'

interface Size {
    width: number
    height: number
}



export const Logo = () => img(
    {
        alt: `vilex logo`,
        src: LogoPath
    },
    {
        width: 'auto',
        height: toPx(80)
    }
)