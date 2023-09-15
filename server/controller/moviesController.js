import items from '../data/movies.js'

const getMovies = async (req, res) => {
	try {

		return movies
	} catch (error) {
		console.log('movies not found', error);
	}
}



export default getMovies