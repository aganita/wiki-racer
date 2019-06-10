'use strict'
const { getPath } = require('./search')

async function routes (fastify, options) {
  fastify.get('/', async (req, res) => {
    res.sendFile('index.html')
  })

  fastify.get('/health', async (req, res) => {
    return { hello: 'Ani!'}
  })

  fastify.get('/geturl', async (req, res) => {
    const startUrl = req.query.start || 'https://en.wikipedia.org/wiki/Malaria'
    const endUrl = req.query.end || 'https://en.wikipedia.org/wiki/Geophysics'

    const body = await getPath(startUrl, endUrl)

    return body
  })
}

module.exports = routes