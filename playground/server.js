const express = require('express')
const hbs = require('hbs')

var app = express()

hbs.registerPartials(__dirname + '/../views/partials')
app.set('view engine', hbs)

app.use((req, res, next) => {
    res.render('maintenance.hbs')
    //next();
})
app.get('/', (req, res) => {
    res.send({
        name: 'Ankit',
        likes: [
            'Drinking tea',
            'Feeling good about my body'
    ]
    })
})

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Too bad'
    })
})

app.get('/home', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Home',
        message: 'Welcome!',
        year: new Date().getFullYear()
    })
})
app.listen(3000)