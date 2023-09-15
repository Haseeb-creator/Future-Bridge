import Express from "express";
import getMovies from "../controller/moviesController.js";
import items from '../data/movies.js'

const router = Express.Router()


router.get('/', (req, res) => {
	res.json(items)
})



export default router