'use strict'

const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()

const defaultPort = 3000
const port = process.env.PORT || defaultPort

app.use(async ctx => {
    ctx.body = 'Hello World';
  });

app.use(router.routes())
module.exports = app.listen(port, async() => console.log(`listening on port ${port}`))
