module.exports = (app) => {
    let input = async (obj) => {
        try {

            if (!obj)
                return {
                    code: 500.1,
                    data: null,
                    error: 'Parâmetros inválidos'
                }

            return {
                code: 200,
                data: {},
                error: null
            }

        } catch (error) {
            console.error(error)
            return {
                code: 500,
                data: null,
                error
            }
        }
    }

    return {
        input,
    }
}
