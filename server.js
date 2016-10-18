const path = require('path')
const express = require('express')

module.exports = {
  app: function () {
    const app = express()
    var indexPath = path.join(__dirname + '/public', 'index.html')
    var publicPath = express.static(path.join(__dirname, 'public'))

	app.use('/public', publicPath)
	app.get('*', function (_, res) { res.sendFile(indexPath) })

    return app
  }
}
