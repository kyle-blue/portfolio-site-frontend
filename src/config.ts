declare let env: any

let environment: 'prod' | 'test' | 'staging' | 'development' = 'prod'
if (env?.ENVIRONMENT) {
    environment = env.ENVIRONMENT as any
}
const devConfig = {
    api: {
        host: 'api.kblue-dev.io',
        protocol: 'https',
        port: 30001,
        url: 'https://api.kblue-dev.io:30001',
    },
    baseUrl: 'https://www.kblue-dev.io:30001',
    environment,
}

const prodConfig = {
    api: {
        host: 'api.blue.io',
        protocol: 'https',
        port: 443,
        url: 'https://api.kblue.io',
    },
    baseUrl: 'https://www.kblue.io',
    environment,
}

let envConfig = prodConfig
if (['test', 'development'].includes(environment)) envConfig = devConfig

const combinedConfig = {
    lastUpdated: env?.LAST_UPDATED,
    ...envConfig,
}

export default combinedConfig
