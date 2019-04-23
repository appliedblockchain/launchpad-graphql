const koaRouter = require('koa-joi-router')
const routes = require('./routes')

const router = koaRouter()

router.prefix('/api')

routes.reduce((acc, subrouter) => {
  router.use(subrouter)
  return acc.concat(subrouter.routes)
}, [])

module.exports = router.middleware()