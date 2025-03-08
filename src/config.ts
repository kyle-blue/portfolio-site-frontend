declare let env: any

const devConfig = {
    api: {
        host: 'api.kblue-dev.io',
        protocol: 'http',
        port: 30000,
        url: 'http://api.kblue-dev.io:30000',
    },
}

const prodConfig = {
    api: {
        host: 'api.blue.io',
        protocol: 'https',
        port: 443,
        url: 'https://api.kblue.io',
    },
}

let envConfig = prodConfig
if (import.meta.env.VITE_APP_ENV === 'development') envConfig = devConfig

const combinedConfig = {
    lastUpdated: env.LAST_UPDATED,
    ...envConfig,
}

export default combinedConfig
