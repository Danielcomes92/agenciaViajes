import express from 'express'
import router from './routes/index.js'; //importamos el router
import db from './config/db.js'; //importamos la db

const app = express();

//conectar la db
db.authenticate()
    .then( () => console.log('Base de datos conectada'))
    .catch( error => console.log(error));

//habilitar PUG
app.set('view engine', 'pug');

//obtener year actual
app.use( (req, res, next) => {
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia de Viajes';

    next();
});

//agregar body parser para leer datos del formulario
app.use(express.urlencoded({extended: true}));

//definir la carpeta publica estatica de express
app.use(express.static('public'));

//agregar router con el metodo app.use y el router
app.use('/', router);

//puerto y host para la app
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 4000;

app.listen(port, host, () => {
    console.log(`Server working`)
});