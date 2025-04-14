import { http, HttpResponse } from 'msw'
import config from '../../src/config'

export const send_email_url = `${config.api.url}/api/v1/send_email`

export default [
    http.post(send_email_url, () => {
        return HttpResponse.json({ message: 'success' })
    }),
]
