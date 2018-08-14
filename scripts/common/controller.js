module.exports = (app) => {
    let response = (res, response) => {
        if (response.error) {
            res.status(response.code || 500)
        }
        else {
            res.status(response.code || 200)
        }
        res.send(response)
    }

    return {
        response,
    }
}
