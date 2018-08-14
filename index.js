const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const consign = require('consign')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('../../logger')
//global
app.config = require('../config')

consign()
    .then('./scripts')
    .into(app)

// Log
app.use((req, res, next) => {
    logger.express(req.method + ':' + req.url, { query: req.query, params: req.params, headers: req.headers })
    next()
})

// CORS
app.options('*', cors())
app.use(cors())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, accept, kloe-oauth')
    if (req.method === 'OPTIONS') res.sendStatus(200)
    else next()
})

// BODY JSON
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// ASSETS
app.use(express.static(path.join(__dirname, '/../public')))
app.use(favicon(path.join(__dirname, '/../public', 'favicon.png')))
app.get('/favicon.ico', (req, res) => {
    res.status(204)
})

// ENGINE LAYOUT
app.set('views', path.join(__dirname, '/../views'))
app.set('view engine', 'ejs')

app.use('/health', (req, res) => {
    res.status(200).send('OK')
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    res.status(404).send(JSON.stringify({
        message: 'Not Found',
        error: {}
    }))
})

if (app.config.prod) {
    // production error handler
    app.use(function (err, req, res, next) {
        logger.express(err)
        res.status(err.status || 500).send(JSON.stringify({
            message: err.message,
            error: {}
        }))
    })
}
else {
    // development error handler
    app.use(function (err, req, res, next) {
        logger.express(err)
        res.status(err.status || 500).send(JSON.stringify({
            message: err.message,
            error: err
        }))
    })
}

// EXPORTS:
module.exports = app
