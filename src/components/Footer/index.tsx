import React from 'react'
import { Spacer } from '../utility/Spacer'
import { MainContainer, ContactContainer } from './styles'

export default function Footer(): React.ReactElement {
    return (
        <MainContainer>
            <ContactContainer>
                <p>
                    <b>Contact Email</b>:{'      '}kyle.blue.nuttall@gmail.com
                </p>
            </ContactContainer>
            <p>
                © copyright
                <br />
                Kyle Doidge - 2025
            </p>
        </MainContainer>
    )
}
