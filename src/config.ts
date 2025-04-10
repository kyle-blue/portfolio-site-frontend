declare let env: any

let environment = 'prod'
if (['test', 'development'].includes(env?.ENVIRONMENT)) environment = 'development'

const devConfig = {
    api: {
        host: 'api.kblue-dev.io',
        protocol: 'https',
        port: 30001,
        url: 'https://api.kblue-dev.io:30001',
    },
    baseUrl: 'https://www.kblue-dev.io:30001',
}

const prodConfig = {
    api: {
        host: 'api.blue.io',
        protocol: 'https',
        port: 443,
        url: 'https://api.kblue.io',
    },
    baseUrl: 'https://www.kblue.io',
}

let envConfig = prodConfig
if (environment === 'development') envConfig = devConfig

const combinedConfig = {
    lastUpdated: env?.LAST_UPDATED,
    ...envConfig,
}

export default combinedConfig
