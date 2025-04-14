import Axios, { AxiosRequestConfig, AxiosError, AxiosResponseHeaders } from 'axios'
import config from '../config'

type ApiResponse<T = any> = Promise<{
    status: number
    headers: Record<string, string>
    body?: T
}>

interface SendEmailRequestBody {
    name: string
    email: string
    message: string
}

interface SendEmailResponseBody {
    message: string
}

function convertAxiosHeaders(headers: AxiosResponseHeaders): Record<string, string> {
    return headers.toJSON(true) as any
}

export async function axiosRequest(requestConfig: AxiosRequestConfig): ApiResponse {
    try {
        const response = await Axios.request(requestConfig)
        return { status: response.status, headers: convertAxiosHeaders(response.headers as any), body: response.data }
    } catch (error) {
        if (error instanceof AxiosError) {
            const response = error?.response ?? { status: 400, headers: {}, data: undefined }
            return { status: response.status, headers: convertAxiosHeaders(response.headers as any), body: response.data }
        }
        return { status: 400, headers: {} }
    }
}

export async function sendEmail(requestBody: SendEmailRequestBody): ApiResponse<SendEmailResponseBody> {
    return axiosRequest({ method: 'POST', url: `${config.api.url}/api/v1/send_email`, data: requestBody })
}
