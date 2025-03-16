import { JSXElementConstructor, ReactElement, useRef } from 'react'
import { ExitButton, ExitIcon, InnerContainer, StyledModal, TitleContainer } from './styles'
import { useOnClickOutside } from '../../hooks/onClickOutside'

interface Props {
    title: React.JSX.Element | string
    children: ReactElement<unknown, string | JSXElementConstructor<any>>
    open: boolean
    setOpen: (x: boolean) => void
}

export default function Modal({ title, children, open, setOpen }: Props): ReactElement {
    const modalRef = useRef(null)
    useOnClickOutside([modalRef], () => setOpen(false))
    return (
        <StyledModal open={open} disablePortal={false}>
            <InnerContainer ref={modalRef}>
                <TitleContainer>
                    <h1>{title}</h1>
                    <ExitButton onClick={() => setOpen(false)}>
                        <ExitIcon />
                    </ExitButton>
                </TitleContainer>
                {children}
            </InnerContainer>
        </StyledModal>
    )
}
