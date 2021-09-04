import { readFileSync } from 'fs'
import { URL } from 'url'

import { HttpMethod } from './http'

let configuration: CarbonConfiguration | undefined

export interface CarbonConfiguration {
    baseURL: string
    graphQLHttpMethod?: HttpMethod
}

export function NewConfig(): Readonly<CarbonConfiguration> {
    if (configuration) {
        return configuration
    }

    try {
        configuration = JSON.parse(
            readFileSync(`${__dirname}/../../../.carbon.json`).toString('utf8'),
        )
    } catch (_) {
        throw new Error(
            'could not parse configuration file .carbon.json from root of your project.',
        )
    }

    try {
        new URL(configuration?.baseURL)
    } catch (_) {
        throw new Error('baseURL must be defined inside .carbon.json')
    }
}
