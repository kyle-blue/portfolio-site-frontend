import { useEffect } from 'react'

export function useOnClickOutside(refs: React.RefObject<any>[], handler: (e: TouchEvent) => void) {
    useEffect(() => {
        const listener = (event: TouchEvent) => {
            for (const ref of refs) {
                if (!ref.current || ref.current.contains(event.target)) {
                    return
                }
            }
            handler(event)
        }

        document.addEventListener('mousedown', listener as any)
        document.addEventListener('touchstart', listener as any)

        return () => {
            document.removeEventListener('mousedown', listener as any)
            document.removeEventListener('touchstart', listener as any)
        }
    }, [refs, handler])
}
