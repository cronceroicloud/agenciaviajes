// Importamos el módulo 'express' que nos permite crear aplicaciones web de manera sencilla.
import express from 'express';
import router from './routers/index.js';
import db from './config/db.js';
import moment from 'moment';



// Creamos una instancia de la aplicación express.
const app = express();

 //Conectar a la Base de Datos
db.authenticate()
    .then( ()=> console.log('Conectado a la base de datos') )
    .catch( err => console.log(err) );


// Definimos el puerto en el que el servidor va a escuchar.
// Si hay una variable de entorno PORT, se usa esa, de lo contrario, se usa el puerto 4000.
const port = process.env.PORT || 4000;

//Midleware es app
//Habilitar PUG
app.set('view engine', 'pug');

// Middleware global para definir el año
app.use((req, res, next) => {
    const year = new Date().getFullYear();
    res.locals.year = year; // Esto agrega el año a res.locals
    res.locals.nombreP = 'Agencia de Viajes';
    next(); // Llamamos a next() para pasar al siguiente middleware o ruta
});

// Middleware para analizar datos de formularios (application/x-www-form-urlencoded)
//el servidor esté configurado para analizar los datos del formulario. En Express,//
app.use(express.urlencoded({ extended: true }));



//Definir la carpeta pública
app.use(express.static('public'));


//Agregamos router
app.use('/', router);



// Configuramos el servidor para que escuche en el puerto definido y, cuando esté listo,
// se ejecute la función de callback que imprime un mensaje en la consola.
app.listen(port, () => {
    console.log('Servidor corriendo en el puerto ' + port);
});

//En package.json cuando vaya a desarrollo
//"start": "index.js"
//    "dev": "nodemon index.js"
