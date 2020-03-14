'use strict'

const Koa = require('koa')
const Router = require('koa-router')
const staticDir = require('koa-static')
const bodyParser = require('koa-bodyparser')
const session = require('koa-session')

const app = new Koa()
const router = new Router()

app.use(staticDir('public'))
app.use(bodyParser())
app.use(session(app))

const defaultPort = 8080
const port = process.env.PORT || defaultPort

app.use(router.routes())
module.exports = app.listen(port, async() => console.log(`listening on port ${port}`))