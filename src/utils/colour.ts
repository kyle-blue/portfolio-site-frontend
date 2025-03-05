export function isColourLight(colour: string, lightIsMoreThan = 127.5) {
    const { r, g, b } = getRGBA(colour)

    // HSP equation from http://alienryderflex.com/hsp.html
    const hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b))

    if (hsp > lightIsMoreThan) {
        return true
    } else {
        return false
    }
}

/**
 * @param colour RGB or Hex colour string
 * @param amount Amount to lighten by (between 0 and 255)
 */
export function lighten(colour: string, amount: number) {
    let { r, g, b, a } = getRGBA(colour)

    r = Math.min(r + amount, 255)
    g = Math.min(g + amount, 255)
    b = Math.min(b + amount, 255)

    if (a !== 1.0) return `rgba(${r}, ${g}, ${b}, ${a})`
    return `rgb(${r}, ${g}, ${b})`
}

/**
 * @param colour RGB or Hex colour string
 * @param amount Amount to darken by (between 0 and 255)
 */
export function darken(colour: string, amount: number) {
    amount = Math.round(amount)
    let { r, g, b, a } = getRGBA(colour)

    r = Math.max(r - amount, 0)
    g = Math.max(g - amount, 0)
    b = Math.max(b - amount, 0)

    if (a !== 1.0) return `rgba(${r}, ${g}, ${b}, ${a})`
    return `rgb(${r}, ${g}, ${b})`
}

export function setOpacity(colour: string, opacity: number) {
    let { r, g, b } = getRGBA(colour)
    return `rgba(${r}, ${g}, ${b}, ${opacity})`
}

export function darkModeColour(colour: string) {
    let { r, g, b, a } = getRGBA(colour)

    const hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b))
    const diff = hsp - 127.5
    r -= 2 * diff
    g -= 2 * diff
    b -= 2 * diff

    if (a !== 1.0) return `rgba(${r.toFixed()}, ${g.toFixed()}, ${b.toFixed()}, ${a.toFixed()})`
    return `rgb(${r.toFixed()}, ${g.toFixed()}, ${b.toFixed()})`
}

interface RGBA {
    r: number
    g: number
    b: number
    a: number
}
export function getRGBA(colour: string): RGBA {
    let r = 255
    let g = 255
    let b = 255
    let a = 1.0
    // RGB parse
    if (colour.match(/^rgb/)) {
        const result = colour.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/)
        r = parseFloat(result?.[1] ?? '255')
        g = parseFloat(result?.[2] ?? '255')
        b = parseFloat(result?.[3] ?? '255')
        a = parseFloat(result?.[4] ?? '1.0')
    } else {
        // Hex Parse
        const colourNumber = Number('0x' + colour.slice(1).replace(colour.length < 5 ? /./g : '', '$&$&'))

        r = colourNumber >> 16

        g = (colourNumber >> 8) & 255
        b = colourNumber & 255
    }
    return { r, g, b, a }
}
