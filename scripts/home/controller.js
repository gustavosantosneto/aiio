module.exports = (app) => {
    let home = async () => {
        try {

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
        home,
    }
}
