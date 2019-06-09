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
    const body = await getPath('https://en.wikipedia.org/wiki/Malaria', 'https://en.wikipedia.org/wiki/Geophysics')
    
    console.log( 'Done!', body)
    return body
  })
}

module.exports = routes