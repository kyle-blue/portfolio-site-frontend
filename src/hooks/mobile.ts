import { useEffect, useState } from 'react'

const resizeFunctions: (() => void)[] = []
window.addEventListener('resize', () => {
    for (const func of resizeFunctions) func()
})

export function useScreenWidth() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {
        resizeFunctions.push(() => setScreenWidth(window.innerWidth))
    }, [screenWidth])

    return screenWidth
}
