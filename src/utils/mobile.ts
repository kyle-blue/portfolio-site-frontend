export enum ScreenWidths {
    MOBILE = 800,
    LAPTOP = 1400,
    DESKTOP = 2100,
    BIG_DESKTOP = 3100,
}

export enum ScreenMultipliers {
    MOBILE = 0.75,
    LAPTOP = 0.75,
    DESKTOP = 1,
    BIG_DESKTOP = 1.3,
}
export const BIGGEST_MULTIPLIER = 1.8

const multipliers = Object.values(ScreenMultipliers).filter((x) => typeof x !== 'string')
const widths = Object.values(ScreenWidths).filter((x) => typeof x !== 'string')

// Function that is used to generate media queries for all device sizes
// that uses a multiplier to adjust scale of css attributes
export function mediaQueries(func: (multiplier: number) => string) {
    let ret = ''

    for (let i = multipliers.length - 1; i >= 0; i--) {
        ret += `
@media (max-width: ${widths[i]}px) {
    ${func(multipliers[i])}
};
        `
    }
    return ret
}

export function getCurrentScreenMultiplier(screenWidth: number) {
    for (let i = 0; i < multipliers.length; i++) {
        if (screenWidth < widths[i]) return multipliers[i]
    }
    return BIGGEST_MULTIPLIER
}

export function mediaQueriesIncludingDefault(func: (multiplier: number) => string) {
    let ret = `
    ${func(BIGGEST_MULTIPLIER)};
        `
    ret += mediaQueries(func)
    return ret
}

export function mediaQueryMobile(css: string) {
    return `
@media (max-width: ${ScreenWidths.MOBILE}px) {
    ${css}
};
`
}

export function mediaQueryLaptop(css: string) {
    return `
@media (max-width: ${ScreenWidths.LAPTOP}px) {
    ${css}
};
`
}

export function mediaQueryDesktop(css: string) {
    return `
@media (max-width: ${ScreenWidths.DESKTOP}px) {
    ${css}
};
`
}

export function mediaQueryBigDesktop(css: string) {
    return `
@media (max-width: ${ScreenWidths.BIG_DESKTOP}px) {
    ${css}
};
`
}

export function isMobile(screenWidth: number) {
    return screenWidth < ScreenWidths.MOBILE
}
