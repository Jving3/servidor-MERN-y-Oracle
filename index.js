const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');
const morgan = require('morgan');

//--------------------------- MongoDB--------------------------------------

// crear el servidor
const app = express();

// Conectar a la base de datos
conectarDB();

// habilitar cors
app.use(cors());

// Habilitar express.json
app.use( express.json({ extended: true }));

// puerto de la app
const port = process.env.PORT || 4000;

// Importar rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/proyectos', require('./routes/proyectos'));
app.use('/api/tareas', require('./routes/tareas'));

// arrancar la app
app.listen(port, '0.0.0.0', () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
});



//----------------------- ORACLE ------------------------------------------

//imports
const personRoutes = require('./oracle/routes/routes');

//settings
app.set('port', 4040);

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use(personRoutes);


//run
app.listen(app.get('port'), () => {
    console.log('Server on Port 4040')
})