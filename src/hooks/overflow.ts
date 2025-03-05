import * as React from 'react'

export const useIsHorizontalOverflow = (ref: React.MutableRefObject<any>) => {
    const [isOverflow, setIsOverflow] = React.useState<boolean>(false)

    React.useLayoutEffect(() => {
        const { current } = ref

        const trigger = () => {
            const hasOverflow = current.scrollWidth > current.clientWidth

            setIsOverflow(hasOverflow)
        }

        if (current) {
            trigger()
        }
    }, [ref])

    return isOverflow
}

export const useIsVerticalOverflow = (ref: React.MutableRefObject<any>) => {
    const [isOverflow, setIsOverflow] = React.useState<boolean>(false)

    React.useLayoutEffect(() => {
        const { current } = ref

        const trigger = () => {
            const hasOverflow = current.scrollHeight > current.clientHeight

            setIsOverflow(hasOverflow)
        }

        if (current) {
            trigger()
        }
    }, [ref])

    return isOverflow
}
