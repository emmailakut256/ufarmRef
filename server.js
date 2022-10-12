// Dependencies
// server-express.js
const express = require('express');
const path = require('path')

// Instantiations
const app = express(); //Initialising the app instance from express
const port = 3002;

// Configurations
app.set('view engine', 'pug')

// app.set('views', path.join(__dirname, 'views'))

app.set('views', './views')


// Middleware..Remember middlewares should be above Routes

 // To parse URL encoded data
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public/uploads', express.static(__dirname + '/public/uploads')) 

// Routes
app.get('/', (req,res) => {
    res.render('landing')
});

// For invalid routes
app.get('*', (req, res) => {
    res.send('404! This is an invalid URL.');
  });

// Bootstrapping Server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
    });