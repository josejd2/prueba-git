import express from 'express'
const app = express()
const PORT = 3000

app.get('/', (req, res) =>{
    res.send('Servidor funcionando')
});

app.get('/saludo/:nombre', (req, res) =>{
    const nombre = req.params.nombre;
    res.send(`Hola, ${nombre}`)
});

app.listen(PORT,() =>{
    console.log(`Servidor lanzado en http://localhost:${PORT}`)
});