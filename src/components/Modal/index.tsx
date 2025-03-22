import { JSXElementConstructor, ReactElement, useRef } from 'react'
import { ExitButton, ExitIcon, GoBackButton, GoBackIcon, InnerContainer, StyledModal, TitleContainer } from './styles'
import { useOnClickOutside } from '../../hooks/onClickOutside'
import { useScreenWidth } from '../../hooks/mobile'
import { isMobile as isMobileFunc } from '../../utils/mobile'

interface Props {
    title: React.JSX.Element | string
    children: ReactElement<unknown, string | JSXElementConstructor<any>>
    open: boolean
    setOpen: (x: boolean) => void
}

export default function Modal({ title, children, open, setOpen }: Props): ReactElement {
    const screenWidth = useScreenWidth()
    const isMobile = isMobileFunc(screenWidth)
    const modalRef = useRef(null)
    useOnClickOutside([modalRef], () => setOpen(false))
    return (
        <StyledModal open={open} disablePortal={false} isMobile={isMobile}>
            <InnerContainer ref={modalRef} isMobile={isMobile}>
                <TitleContainer>
                    <h1>{title}</h1>
                    {isMobile ? (
                        <GoBackButton onClick={() => setOpen(false)}>
                            <GoBackIcon />
                        </GoBackButton>
                    ) : (
                        <ExitButton onClick={() => setOpen(false)}>
                            <ExitIcon />
                        </ExitButton>
                    )}
                </TitleContainer>
                {children}
            </InnerContainer>
        </StyledModal>
    )
}
