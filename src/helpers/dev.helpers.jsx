import dat from 'dat.gui'

const urlParams = new URLSearchParams(window.location.search)

export const isDev = process.env.NODE_ENV === "development" || urlParams.has('isDev')
    //export const isDev = true;

export const wait = (t = 0) => new Promise(r => setTimeout(r, t))

export let devGUI = isDev ? new dat.GUI({
    autoPlace: true
}) : null

// export type devGUIConfig = {
//   name: string,
//   object: any,
// }[]

export const addDevGUIConfig = (_config) => {
    if (!devGUI) {
        return
    }

    try {
        const config = _config.map(c => ({
            ...c,
            items: Object.keys(c.object).map((prop) => ({
                object: c.object,
                prop
            }))
        }))

        config.forEach(i => {
            const f = devGUI.addFolder(i.name)
            f.open()
            i.items.forEach(i => f.add(i.object, i.prop, ))

        })

    } catch {

    }

}

if (isDev) {
    const div = document.querySelector('.dg.ac')
        //@ts-ignore
    div.style.zIndex = 1945
}