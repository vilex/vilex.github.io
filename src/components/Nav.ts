import { img } from "vilex";
import { span } from "vilex";
import { ViElement } from "vilex";
import { li } from "vilex";
import { ul } from "vilex";

enum Direction {
    horizontal = 'horizontal',
    vertical = 'vertical'
}

interface NavItemOptions {
    name: string
    link: string
    icon?: string
    direction?: Direction
}

interface NavOptions {
    list: NavItemOptions[],
    direction?: Direction
}

export function Nav(options: NavOptions) {
    return ul(
        options.list.map(
            item => 
                li([
                    
                ])
        )
    )
}

function CreateLI(data: NavItemOptions) {

    const childs: ViElement[] = []
    if (data.icon) {
        childs.push(
            img(
                {
                    alt: 'icon',
                    src: data.icon
                }
            )
        )
    }

    if (data.name) {
        childs.push(
            span(
                data.name
            )
        )
    }

    if (!data.direction) {
        data.direction = Direction.horizontal
    }


    // if (data.direction == )

    return li(
        childs,
    )
}