const koaRouter = require('koa-joi-router')
const routes = require('./routes')

const router = koaRouter()

router.prefix('/api')

routes.forEach(subrouter => router.use(subrouter))

module.exports = router.middleware()