import React, { useState } from 'react'
import { SendButton, TextField } from './ContactFormStyles'
import { MarginSpacer } from '../../components/utility/Spacer'
import Snackbar from '../../components/Snackbar'
import Axios from 'axios'
import config from '../../config'

export default function ContactForm(): React.ReactElement {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')
    const [successMessage, setSuccessMessage] = useState('')

    // Used to throttle send clicks
    const [canClickSend, setCanClickSend] = useState(true)

    const sendEmails = async () => {
        const response = await Axios.post(`${config.api.url}/api/v1/send_email`, {
            name,
            email,
            message,
        })
        if (response.status === 200) {
            setSuccessMessage('Email successfully sent.\nEmail confirmation also sent to your email.')
        } else {
            setError('Request failed. Please try again later.')
        }
    }

    return (
        <>
            <Snackbar type="error" open={!!error} message={error} autoHideDuration={50000} onClose={() => setError('')} />
            <Snackbar
                type="success"
                open={!!successMessage}
                message={successMessage}
                autoHideDuration={5000}
                onClose={() => setSuccessMessage('')}
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
            />
            <MarginSpacer size={20} />
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
            >
                SEND
            </SendButton>
        </>
    )
}
