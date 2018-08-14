module.exports = (app) => {
    app.post('/input/', async (req, res) => {
        let result = await app.scripts.input.controller(req.body)

        return app.scripts.common.controller.response(res, result)
    })
}