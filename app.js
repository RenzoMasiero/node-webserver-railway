

const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express()
const port = process.env.PORT;



//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials'); 

//servir contenido estatico
app.use(express.static('public'))//public es la carpeta. se debe direccionar ahi

app.get('/', (req, res) => {
  res.render('Home',{
    nombre: 'Renzo Masiero',
    titulo: 'Curso de NODE'
  });
});

app.get('/generic', (req, res) => {
  res.render('generic',{
    nombre: 'Renzo Masiero',
    titulo: 'Curso de NODE'
})
});

app.get('/elements', (req, res) => {
  res.render('elements',{
    nombre: 'Renzo Masiero',
    titulo: 'Curso de NODE'
})
});

app.get('*', (req, res) => {
  res.send('404 | page not found');
})

app.listen(port, ()=>{
  console.log(`Escuchando en : http://localhost:${port}`)
})