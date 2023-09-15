import express from 'express'
import cors from 'cors'
import userRoute from './route/userRoute.js'
import connectDb from './config/db.js'


const app = express()
const PORT = 4001
app.use(cors())
app.use(express.json())
connectDb();


app.get('/', (req, res) => {
	res.send('sever is running')
})

app.use('/api/user', userRoute)


app.listen(PORT, () => {
	console.log('server  is running on port', PORT);
})