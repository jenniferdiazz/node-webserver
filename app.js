// const http = require('http');

// //servidor
// http.createServer((req, res)=>{
//     res.write('hola mundo');
//     res.end();

// })
// .listen( 8080 );
// console.log('escuchando el puerto', 8080);
require('dotenv').config();
const express = require('express')
const hbs = require('hbs');
const app = express()
const port = process.env.PORT;


//handlebar
app.set('view engine', 'hbs')
hbs.registerPartials( __dirname + '/views/partials');
//servir contenido estatico
app.use( express.static('public'));

app.get('/', (req,res)=>{
    res.render('home', {
        nombre: 'Jennifer Diaz',
        titulo: 'Curso de node'
    })
})

app.get('/generic', (req, res)=>{
    res.render('generic', {
        nombre: 'Jennifer Diaz',
        titulo: 'Curso de node'
    })
    //res.sendFile( __dirname + '/public/generic.html');
    
})

app.get('/elements', (req, res)=>{
    res.render('elements', {
        nombre: 'Jennifer Diaz',
        titulo: 'Curso de node'
    })
    //res.sendFile( __dirname + '/public/elements.html');
})

app.get('*', (req, res)=>{
    res.sendFile( __dirname + '/public/404.html');
})





app.listen(port, ()=>{
    console.log(`listening at port: ${port}`)
})