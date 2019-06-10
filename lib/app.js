'use strict'
const path = require('path')

const fastify = require ('fastify')({
  logger: true
})

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, '../public'),
  prefix: '/'
})

fastify.register(require('./routes'))

const start = async () => {
  try {
    await fastify.listen(process.env.PORT || 3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()