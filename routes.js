const express = require ('express')
const app = express()
const http = require('http');


app.use(express.static('public'))
app.set('views','/views')
app.set('view engine', 'ejs');


app.get('/test',(req,res)=>{
    res.render('test')
})