require('dotenv').config
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./config/database/database')

db.authenticate().then(()=>{
    console.log('Database acessível')
}).catch(error => {
    console.log('Erro:' + error)
})

const app = express();

app.use(bodyParser.json(({limit: '60mb'})))
app.use(bodyParser.urlencoded({extended:true, limit:'60mb'}))
app.use(cors('*'))

const PORT = 3000

app.use('/', require('./routes/routes'))

db.sync().then(()=>{
    app.listen(PORT, console.log(`Server conetado na porta ${PORT}`))
}).catch(error => {
    console.log(`Error:${error}`)
})
