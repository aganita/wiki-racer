const https = require('https')

const httpsProxy = async (url) => {
  return new Promise((resolve, reject) => {
    let body = ''
    https.get(url, (res) => {
      if (res.statusCode < 200 || res.statusCode > 299) {
        reject(new Error('Failed to load page, status code: ' + res.statusCode));
      }

      res.on('data', (data)=>{
        body += data
      })
  
      res.on('end', () => {
        resolve(body)
      })
    }).on('error', (err) => reject(err))
  })
}


module.exports =  {
  httpsProxy
}