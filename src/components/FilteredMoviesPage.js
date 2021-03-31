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

  currentUser,
  onHandleGenreReset,
  onHandleComparison,
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

        {filteredMovies.map(movie => (
          <Card
            title={movie.title}
            release_date={movie.release_date}
            image={movie.poster_path}
            genresMovie={movie.genre_ids}
            allGenres={genres}
            key={movie.id}
            onAddToWatchlist={() => onAddToWatchlist(movie, currentUser)}
          />
        ))}
        <ButtonWrapper>
          <MenuButton as={Link} to="/">
            Home
          </MenuButton>
          <MenuButton as={Link} to="/search">
            Search
          </MenuButton>
          <MenuButton
            as={Link}
            to="/results"
            onClick={() => onHandleComparison()}
          >
            Results
          </MenuButton>
          <MenuButton as={Link} to="/" onClick={() => onHandleGenreReset()}>
            Next User
          </MenuButton>
        </ButtonWrapper>
      </FilterWrapper>
    </>
  )
}

const FilterWrapper = styled.div`
  position: relative;
  margin-bottom: 50px;
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  position: fixed;
  width: 100%;
  align-items: stretch;
  align-content: center;
  background-color: #6d676e;
  padding: 5px;
  bottom: 0;

  text-align: center;
`
const MenuButton = styled(Button)`
  background: transparent;
  color: white;
  border-radius: 10px;
  padding: 10px;
`
