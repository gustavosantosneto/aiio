module.exports = (logger) => {

    let exportsObj = {
        print: (logger) => {
            logger && logger.debug('Configurações importadas')
            logger && logger.debug(exportsObj)
        },
        prod: false,
        Log: {
            path: '/ignore/logs/',
            enableds: ['info', 'debug', 'error', 'express'],
            colors: {
                info: '\x1b[32m',
                debug: '\x1b[33m',
                error: '\x1b[31m'
            }
        },

    }

    logger && logger.debug('Configurações importadas')
    logger && logger.debug(exportsObj)

    return exportsObj
}