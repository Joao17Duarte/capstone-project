// import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
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
  // onFilteredMovies,
  // filterMovies,
}) {
  // THIS COMMENTED OUT CODE IS TO TRY RANDOMIZE SOME SUGGESTIONS OF MOVIES (DOESN'T WORK)

  // const [suggestions, setSuggestions] = useState(randomMovies())

  // function randomMovies() {
  //   const randomFilteredMovies = filterMovies.sort(() => 0.5 - Math.random())
  //   let randomizedMovies = randomFilteredMovies.slice(0, 5)
  //   return randomizedMovies
  // }

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
        </ButtonWrapper>
        {filteredMovies.map(movie => (
          <Card
            title={movie.title}
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
