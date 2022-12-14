import { a, div, ref, span, ViElement } from "vilex"
import { router } from "vilex-router"

interface DataListItemLink {
    name: string
    path: string
}

interface DataListItem {
    name: string,
    list: DataListItemLink[]
}

interface SideBarStore {
    current: ViElement | null
}


export function SideBar(list: DataListItem[]) {
    const _store: SideBarStore = { current: null }
    return div(
        list.map(
            item => div(
                [
                    Title(item.name),
                    ...item.list.map(
                        item => Link(item, _store)
                    )
                ],
                {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    marginBottom: '6px'
                }
            )
        ),
        {
            padding: '10px',
            lineHeight: '30px'
        }
    )
}


function Title(text: string) {
    return span(text, { fontWeight: '600', color: 'black', whiteSpace: 'nowrap' })
}


function Link(data: DataListItemLink, store: SideBarStore) {

    const link = span(
        data.name,
        ['link'],
        {
            // fontSize: '12px',
            color: '#666',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            marginLeft: '12px'
        },
        {
            onclick({ vn }) {
                router.push(data.path)
                if (store.current) {
                    store.current.set({ color: '#666', fontWeight: 'normal' })
                }
                vn.set({ color: `#42b883`, fontWeight: 'bold' })
                store.current = vn
            },
            onmouseenter({ vn }) {
                vn.set({
                    fontWeight: "bold",
                    color: '#42b883'
                })
            },
            onmouseleave({ vn }) {
                if (vn !== store.current) {
                    vn.set({
                        fontWeight: 'normal',
                        color: '#666'
                    })
                }
            }
        }
    )

    const hash = window.location.hash.slice(1)

    if (hash == data.path) {
        link.set({ color: `#42b883`, fontWeight: "bold" })
        store.current = link
    }

    return link
}