import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import Button from './Button/Button'
import Card from './Card/Card'
import Header from './Header/Header'

export default function FilteredMoviesPage({
  movies,
  filterByGenres,
  genres,
  onAddToWatchlist,
  onRemoveFromWatchlist,
  currentUser,
  handleGenreReset,
}) {
  const filteredMovies = movies.filter(
    movie =>
      filterByGenres.length === 0 ||
      movie.genre_ids.some(g => filterByGenres.includes(g))
  )

  return (
    <>
      <FilterWrapper>
        <Header name="Movie Picker" />
        <ButtonWrapper>
          <MenuButton as={Link} to="/">
            Home
          </MenuButton>
          <MenuButton as={Link} to="/search">
            Search Page
          </MenuButton>
          <NextButton as={Link} to="/" onClick={() => handleGenreReset}>
            Next User
          </NextButton>
        </ButtonWrapper>
        {filteredMovies.map(movie => (
          <Card
            title={movie.title}
            release_date={movie.release_date}
            image={movie.poster_path}
            genresMovie={movie.genre_ids}
            allGenres={genres}
            key={movie.id}
            onAddToWatchlist={() => onAddToWatchlist(movie, currentUser)}
            onRemoveFromWatchlist={() =>
              onRemoveFromWatchlist(movie, currentUser)
            }
          />
        ))}
      </FilterWrapper>
    </>
  )

  // function randomMovies(movieArray) {
  //   const randomFilteredMovies = movieArray.sort(
  //     () => 0.5 - Math.floor(Math.random() * 5)
  //   )
  //   let randomizedMovies = randomFilteredMovies.slice(0, 5)
  //   return randomizedMovies
  // }
}

const FilterWrapper = styled.div`
  position: relative;
  margin-bottom: 50px;
`
const ButtonWrapper = styled.div`
  text-align: center;
  margin: 35px;
`
const MenuButton = styled(Button)`
  background-color: #6d676e;
  color: white;
  border-radius: 10px;
  padding: 10px;
`
const NextButton = styled(Button)`
  color: white;
  background-color: #6d676e;
  opacity: 0.6;
  box-shadow: 0px 0px 10px white;
  position: fixed;
  top: 350px;
  right: 5px;
`
