module.exports = (app) => {
    app.post('/output/', async (req, res) => {
        let result = await app.scripts.output.controller.output(req.body)

        return app.scripts.common.controller.response(res, result)
    })
}