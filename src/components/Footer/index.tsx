import React from 'react'
import { MainContainer, ContactContainer } from './styles'

export default function Footer(): React.ReactElement {
    return (
        <MainContainer>
            <div data-test-id="footer-elements">
                <ContactContainer>
                    <p>
                        <b>Contact Email:</b>
                    </p>
                    <p>kyle.blue.doidge@gmail.com</p>
                </ContactContainer>
                <p>
                    © copyright
                    <br />
                    Kyle Doidge - 2025
                </p>
            </div>
        </MainContainer>
    )
}
