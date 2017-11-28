const app = require('express')()
var bodyParser = require('body-parser')
const OAuth = require('oauth')
const twitter = require('./routers/twitter')
const cors = require('cors')


app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/api/twatt', twitter)




app.listen(3000)
