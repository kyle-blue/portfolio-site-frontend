import { describe, test, afterEach, vi, expect } from 'vitest'
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import ContactForm from '../src/pages/Root/ContactForm'
import React from 'react'
import { sendEmail } from '../src/api/email'

vi.mock('../src/api/email', async (importOriginal) => {
    const original = await importOriginal()
    return {
        ...(original as any),
        sendEmail: vi.fn(() => ({ status: 200, headers: {}, body: { message: 'success' } })),
    }
})

function submitMockContactForm() {
    const nameInput = screen.getByRole('textbox', { name: /name/i })
    const emailInput = screen.getByRole('textbox', { name: /email/i })
    const messageInput = screen.getByRole('textbox', { name: /message/i })
    const submitButton = screen.getByRole('button', { name: /send/i })

    const setTextField = (input: Element, text: string) => {
        fireEvent.change(input, { target: { value: text } })
    }

    setTextField(nameInput, 'John Doe')
    setTextField(emailInput, 'john@john.com')
    setTextField(messageInput, 'Test Message')

    fireEvent.click(submitButton)
}

describe('Contact form', () => {
    test('Fake Helpers: Displays success on successful form submit', async () => {
        // vi.mocked is just used for more complete ts typing
        const sendEmailMock = vi.mocked(sendEmail)
        render(<ContactForm />)

        submitMockContactForm()
        expect(sendEmailMock).toHaveBeenCalledOnce()

        await waitFor(() => {
            const snackBar = screen.queryByRole('snackbar')
            expect(snackBar?.textContent?.toLocaleLowerCase()).includes('email successfully sent')
        })
    })
    test('Fake Helpers: Displays error on Api Error', async () => {
        const sendEmailMock = vi.mocked(sendEmail)
        render(<ContactForm />)

        sendEmailMock.mockResolvedValueOnce({ status: 400, headers: {}, body: { message: '' } })

        submitMockContactForm()
        expect(sendEmailMock).toHaveBeenCalledOnce()

        await waitFor(() => {
            const snackBar = screen.queryByRole('snackbar')
            expect(snackBar?.textContent?.toLocaleLowerCase()).toContain('request failed')
        })
    })

    test('Displays error on lack of form data', () => {})

    afterEach(() => {
        cleanup()
        vi.clearAllMocks()
    })
})
