import { describe, test, beforeAll, afterAll, afterEach, vi, expect } from 'vitest'
import mockServer from './mocks/form_server'
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import ContactForm from '../src/pages/Root/ContactForm'
import React from 'react'
import { send_email_url } from './mocks/form_handlers'
import { http, HttpResponse } from 'msw'

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

function getEmailEndpointMock() {
    const emailMock = vi.fn()
    mockServer.events.on('request:start', ({ request }) => {
        if (request.url === send_email_url && request.method === 'POST') {
            emailMock(request)
        }
    })
    return emailMock
}

describe('Contact form', () => {
    beforeAll(() => {
        mockServer.listen({ onUnhandledRequest: 'error' })
    })

    test('Mock Api: Displays success on successful form submit', async () => {
        render(<ContactForm />)

        const emailMock = getEmailEndpointMock()
        submitMockContactForm()
        expect(emailMock).toHaveBeenCalledOnce()

        await waitFor(() => {
            const snackBar = screen.queryByRole('snackbar')
            expect(snackBar?.textContent?.toLocaleLowerCase()).includes('email successfully sent')
        })
    })
    test('Mock Api: Displays error on Api Error', async () => {
        // Error out on send email url
        mockServer.use(
            http.post(send_email_url, () => {
                return HttpResponse.json({}, { status: 500 })
            }),
        )

        render(<ContactForm />)

        const emailMock = getEmailEndpointMock()
        submitMockContactForm()
        expect(emailMock).toHaveBeenCalledOnce()

        await waitFor(() => {
            const snackBar = screen.queryByRole('snackbar')
            expect(snackBar?.textContent?.toLocaleLowerCase()).toContain('request failed')
        })
    })
    test('Fake Helpers: Displays success on successful form submit', () => {})
    test('Fake Helpers: Displays error on Api Error', () => {})

    test('Displays error on lack of form data', () => {})

    afterEach(() => {
        mockServer.resetHandlers()
        cleanup()
    })
    afterAll(() => {
        mockServer.close()
    })
})
