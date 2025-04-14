import React, { useState } from 'react'
import { SendButton, TextField } from './ContactFormStyles'
import { MarginSpacer } from '../../components/utility/Spacer'
import Snackbar from '../../components/Snackbar'
import { CenterFlex } from '@/components/utility/CenterFlex'
import { sendEmail } from '@/api/email'

interface Props {
    [_: string]: any
}
export default function ContactForm({ ...rest }: Props): React.ReactElement {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')
    const [successMessage, setSuccessMessage] = useState('')

    // Used to throttle send clicks
    const [canClickSend, setCanClickSend] = useState(true)

    const sendEmails = async () => {
        const response = await sendEmail({ name, email, message })
        if (response.status === 200) {
            setSuccessMessage('Email successfully sent.\nEmail confirmation also sent to your email.')
        } else {
            setError('Request failed. Please try again later.')
        }
    }

    return (
        <div {...rest}>
            <Snackbar
                role="snackbar"
                type="error"
                open={!!error}
                message={error}
                autoHideDuration={50000}
                onClose={() => setError('')}
                data-test-id="contact-error-snackbar"
            />
            <Snackbar
                role="snackbar"
                type="success"
                open={!!successMessage}
                message={successMessage}
                autoHideDuration={5000}
                onClose={() => setSuccessMessage('')}
                data-test-id="contact-success-snackbar"
            />
            <TextField
                slotProps={{
                    inputLabel: {
                        shrink: true,
                    },
                }}
                onChange={(e) => {
                    setName(e.target.value)
                }}
                color={'primary'}
                variant="outlined"
                label="name"
                placeholder="John Doe"
                data-test-id="contact-name-input"
            />
            <MarginSpacer size={20} />
            <TextField
                slotProps={{
                    inputLabel: {
                        shrink: true,
                    },
                }}
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                color={'primary'}
                variant="outlined"
                label="email"
                placeholder="john.doe@gmail.com"
                data-test-id="contact-email-input"
            />
            <MarginSpacer size={20} />
            <TextField
                color={'primary'}
                slotProps={{
                    inputLabel: {
                        shrink: true,
                    },
                }}
                onChange={(e) => {
                    setMessage(e.target.value)
                }}
                multiline
                rows={9}
                variant="outlined"
                label="message"
                placeholder="We have a position opening at x ..."
                data-test-id="contact-message-input"
            />
            <MarginSpacer size={20} />
            <CenterFlex>
                <SendButton
                    variant="contained"
                    color="secondary"
                    onClick={() => {
                        let isFormFilled = true
                        let errorMessage = 'Form has not been completed.\nEmpty fields: '

                        const addError = (field: string) => {
                            errorMessage += `${field} `
                            isFormFilled = false
                        }
                        if (!name) addError('name')
                        if (!email) addError('email')
                        if (!message) addError('message')

                        if (!isFormFilled) {
                            setError(errorMessage)
                            return
                        }

                        if (canClickSend) {
                            setCanClickSend(false)
                            window.setTimeout(() => {
                                setCanClickSend(true)
                            }, 4000)
                            sendEmails()
                        }
                    }}
                    data-test-id="contact-submit-button"
                >
                    SEND
                </SendButton>
            </CenterFlex>
        </div>
    )
}
