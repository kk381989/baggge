const colors = require('colors')
const async = require('async')
const MongoHandler = require('./mongoHandler')

exports.loadMongoDuty = function loadMongoDuty (callback) {
  const connections = [
    { url: 'mongodb://localhost:27017/baggge', alias: 'baggge', pool: 5 }
  ]

  MongoHandler.openConnectionsNew(connections, (err) => {
    if (!err) {
      global.MongoHandler = {}
      global.MongoHandler.opened = MongoHandler.opened
      console.log(colors.blue('[booting] ✔ database connections opened successfully'))
      callback()
    } else {
      console.log(`[booting] error in making connections with database | ${err}`)
      global.errorApp = true
      process.kill(process.pid)
    }
  })
}

exports.bagggePreLoad = function bagggePreLoad (callback) {
  const main = this

  async.parallel([main.loadMongoDuty], (err) => {
    if (err) {
      global.errorApp = true
      process.kill(process.pid)
    }
    callback()
  })
}
