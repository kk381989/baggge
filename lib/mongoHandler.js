const mongodb = require('mongodb')
const colors = require('colors')

const Client = mongodb.MongoClient

exports.opened = []
exports.cached_conns = []

exports.openConnectionsNew = function openConnectionsNew (databases, cb) {
  const options = {}

  const that = this

  function openMe (dbObj) {
    if (dbObj === undefined) {
      cb(null); return
    }

    const uri = dbObj.url
    const aliasname = dbObj.alias

    if (!uri) {
      console.log(colors.green('[DB] all databases are opened'))
      cb(null)
    } else {
      console.log(`[DB] url ===> ${uri}`)

      Client.connect(uri, options, (err, openedDB) => {
        if (err) {
          cb(err)
          console.log(colors.red(`[DB] Error : opening ${aliasname}`))
          return
        }
        that.opened[aliasname] = openedDB
        that.opened[aliasname].url = uri
        that.opened[aliasname].alias = aliasname

        console.log(`[DB] opened = ${aliasname}`)
        openMe(databases.shift())
      })
    }
  }
  openMe(databases.shift())
}
