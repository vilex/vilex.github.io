import { a, div, span } from "vilex"
import { router } from "vilex-router"

interface DataListItemLink {
    name: string
    path: string
}

interface DataListItem {
    name: string,
    list: DataListItemLink[]
}


export function SideBar(list: DataListItem[]) {
    return div(
        list.map(
            item => div(
                [
                    Title(item.name),
                    ...item.list.map(
                        item => Link(item)
                    )
                ],
                {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start'
                }
            )
        )
    )
}


function Title(text: string) {
    return span(text, { fontSize: '12px', fontWeight: '600', color: 'black' })
}


function Link(data: DataListItemLink) {
    return span(
        data.name,
        {
            fontSize: '12px',
            color: '#666',
            cursor: 'pointer'
        },
        {
            onclick() {
                router.push(data.path)
            },
            
        }
    )
}