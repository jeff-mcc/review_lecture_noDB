const express = require('express')

const app = express()
const port = 3333;

const movieCtrl = require('./controllers/movieController')

app.use(express.json())

app.get('/api/movies', movieCtrl.getMovies)
app.post('/api/movies', movieCtrl.addMovie)
app.delete('/api/movies/:id', movieCtrl.deleteMovie)
app.put('/api/movies/:id', movieCtrl.editMovie)

app.listen(port,()=>console.log(`Server is running on port: ${port}`))