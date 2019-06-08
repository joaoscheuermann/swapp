const express = require('express')
const compression = require('compression')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 5000

app.use(compression())
app.use(express.static(path.join(__dirname, '/site/.vuepress/dist')))

app.listen(PORT, () => console.log(`Listening on ${PORT}`))
