import React, { useEffect, useState } from 'react'
import MovieCard from './component/MovieCard'
import HeaderTop from './component/HeaderTop'
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'


const App = () => {
  const [movies, setMovies] = useState([])

  console.log(movies);

  useEffect(() => {
    const data = async () => {
      return await axios.get('http://localhost:4000/api/movies').then((response) => setMovies(response.data)).catch((error) => console.log('data not found Error', error))
    }
    data()
  }, [])

  return (
    <Container>
      <HeaderTop />
      <Row >
        <MovieCard movies={movies} />
      </Row>
    </Container>)
}

export default App

