module.exports = (app) => {
    app.get('/', async (req, res) => {
        let result = await app.scripts.home.controller.home()

        return app.scripts.common.controller.response(res, result)
    })
}
