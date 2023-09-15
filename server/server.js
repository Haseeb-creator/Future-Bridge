import express from 'express'
import cors from 'cors'
import getMovies from './routes/movieRoute.js'


const app = express()
const PORT = 4000
app.use(cors())
app.use(express.json())



app.get('/', (req, res) => {
	res.send('server is live')
})

app.use('/api/movies', getMovies)


app.listen(PORT, () => {
	console.log('server  is running on port', PORT);
})