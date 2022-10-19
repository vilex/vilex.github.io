import { img } from "vilex";
import { span } from "vilex";
import { ViElement } from "vilex";
import { li } from "vilex";
import { ul } from "vilex";
import { router } from "vilex-router"

export enum Direction {
    horizontal = 'horizontal',
    vertical = 'vertical'
}

interface NavItemOptions {
    name: string
    link: string
    icon?: string
    direction?: Direction
}

export interface NavOptions {
    list: NavItemOptions[],
    direction?: Direction,
    active?: number
}

export function Nav(options: NavOptions) {

    let active: ViElement

    // 这里需要优化，flexDirection 不能接收 string 类型是一个问题
    let direction: any = `row`
    if (options.direction == Direction.vertical) {
        direction = `column`
    }

    const childs = options.list.map(
        (item, index) => {
            const li = CreateLI(item)
            li.set({
                onclick() {
                    if (item.link) {
                        if (item.link.startsWith('http')) {
                            window.open(item.link, '_blank')
                            return
                        } else {
                            router.push(item.link)
                        }
                    }

                    if (active) {
                        active.set({ opacity: .4 })
                    }
                    li.set({ opacity: 1 })
                    active = li
                    options.active = index

                },
                onmouseenter({ vn }) {
                    vn.set({ opacity: 1 })
                },
                onmouseleave({ vn }) {
                    if (options.active == index) {
                        vn.set({ opacity: 1 })
                    } else {
                        vn.set({ opacity: .4 })
                    }
                }
            })
            return li
        }
    )

    if (typeof options.active === 'number') {
        childs[options.active].set({ opacity: 1 })
        active = childs[options.active]
    }

    return ul(
        {
            display: 'flex',
            flexDirection: direction,
            justifyContent: 'space-around',
            alignItems: 'center'
        },
        childs
    )
}

function CreateLI(data: NavItemOptions) {

    const childs: ViElement[] = []
    if (data.icon) {
        childs.push(
            img(
                {
                    alt: 'icon',
                    src: data.icon,
                    objectFit: 'cover'
                }
            )
        )
    }

    if (data.name) {
        childs.push(
            span(
                data.name,
                {
                    lineHeight: '2em'
                }
            )
        )
    }

    if (!data.direction) {
        data.direction = Direction.horizontal
    }


    // 这里需要优化，flexDirection 不能接收 string 类型是一个问题
    let direction: any = `row`
    if (data.direction == Direction.vertical) {
        direction = `column`
    }

    return li(
        {
            display: 'flex',
            flexDirection: direction,
            justifyContent: 'center',
            alignItems: 'center',
            opacity: .4,
            transition: 'opacity .2s',
            cursor: 'pointer',
        },
        childs,
    )

}