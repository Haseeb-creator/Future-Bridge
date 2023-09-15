import React from 'react'
import { Button, Card } from 'react-bootstrap';


const MovieCard = ({ movies }) => {
	return (
		<>
			{movies?.map((movie) => {
				return (
					<>
						<Card style={{ width: '15rem', padding: '0', marginBottom: '0.7rem' }} className='ms-3' key={movie.id}>
							<Card.Img variant="top" src={movie.img} style={{ height: '17rem' }} />
							<Card.Body>
								<Card.Title>{movie.name}</Card.Title>
								<Card.Text> Rating : {movie.rating}
								</Card.Text>
								<Card.Text> Released Date : {movie.released}
								</Card.Text>
								<Button variant="primary" style={{ width: '100%' }}>Watch Now</Button>
							</Card.Body>
						</Card>
					</>)
			})}

		</>
	)
}

export default MovieCard