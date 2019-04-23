const koaRouter = require('koa-joi-router')
const router = koaRouter()
const Joi = koaRouter.Joi
const jwt = require('jsonwebtoken')
const usersDb = require('../../db/users')

const routes = [
  {
    method: 'post',
    path: '/login',
    validate: {
      type: 'json',
      body: Joi.object()
    },
    handler: async ctx => {
      // Fetch user from db - check password etc, currently just pulls users 1
      const user = await usersDb.findOne(1)
      console.log('USER****', user)
      const token = jwt.sign({
        'https://hasura.io/jwt/claims': {
          "x-hasura-allowed-roles": ["editor","user", "admin"],
          "x-hasura-default-role": "user",
          "x-hasura-user-id": `${user.id}`
        }
      }, '5c90a95d02b3ee7ae376166e8e5e9893')
      console.log('TOKEN*', token)
      ctx.ok(token)
    }
  }
]

router.route(routes)

module.exports = router