const createError = require('htts-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())


//catch 404 and forward to error handler
app.use(function(req, res, next){
    res.status(404).send({error: 'Not found'})
})

// error handler
app.use(function(err, req, next){
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}
    res.status(err.status || 500).send({error: err})
})

module.exports = app