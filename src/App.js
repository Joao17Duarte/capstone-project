import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import SearchPage from './components/SearchPage'
import FilteredMoviesPage from './components/FilteredMoviesPage'
import HomePage from './components/HomePage'
import ResultsPage from './components/ResultsPage'

export default function App() {
  const [players, setPlayers] = useState([])
  const [fetchMovies, setFetchMovies] = useState([])
  const [genres, setGenres] = useState([])
  const [filterByGenres, setFilterByGenres] = useState([])
  const [currentUser, setCurrentUser] = useState(players)

  const { REACT_APP_TMDB_API_KEY } = process.env
  let MOVIE_API
  const GENRE_API = `https://api.themoviedb.org/3/genre/movie/list?api_key=${REACT_APP_TMDB_API_KEY}&language=en-US`

  useEffect(() => {
    for (let i = 1; i <= 5; i++) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      MOVIE_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${REACT_APP_TMDB_API_KEY}&page=${i}`

      fetch(MOVIE_API)
        .then(res => res.json())
        .then(data => {
          setFetchMovies(oldState => [...oldState, ...data.results])
        })
        .catch(error => {
          throw error
        })
    }
  }, [MOVIE_API])

  useEffect(() => {
    fetch(GENRE_API)
      .then(res => res.json())
      .then(data => {
        setGenres([...data.genres])
      })
      .catch(error => {
        throw error
      })
  }, [GENRE_API])

  return (
    <>
      <Switch>
        <Route exact path="/">
          <HomePage
            labelText="Insert your Names:"
            placeholder="John Doe"
            addPlayer={addPlayer}
            players={players}
            onHandleDelete={handleDelete}
            onHandleSelection={handleSelection}
          />
        </Route>

        <Route path="/search">
          <SearchPage
            labelText="Choose your Movie:"
            placeholder="Movie Name"
            genres={genres}
            onSetGenre={handleSetGenre}
            filterByGenre={filterByGenres}
            currentUser={currentUser}
            onHandleGenreReset={handleGenreReset}
          />
        </Route>

        <Route path="/filteredmovies">
          <FilteredMoviesPage
            filterByGenres={filterByGenres}
            movies={fetchMovies}
            genres={genres}
            currentUser={currentUser}
            players={players}
            onAddToWatchlist={handleAddToWatchlist}
            onRemoveFromWatchlist={handleRemoveFromWatchlist}
            onHandleGenreReset={handleGenreReset}
          />
        </Route>
        <Route path="/results">
          <ResultsPage
            players={players}
            onhandleComparison={handleComparison}
          />
        </Route>
      </Switch>
    </>
  )

  function handleAddToWatchlist(movie, currentUser) {
    const player = players.find(player => player.name === currentUser.name)
    const index = players.indexOf(player)

    const isMovieInState = player.movies.includes(movie.title)

    if (isMovieInState) {
      alert('this movie is already added')
    } else {
      setPlayers([
        ...players.slice(0, index),
        { ...player, movies: [...player.movies, movie.title] },
        ...players.slice(index + 1),
      ])
      alert('this movie was added to your Watchlist')
    }
  }

  function handleRemoveFromWatchlist(movie, currentUser) {
    // const player = players.find(player => player.name === currentUser.name)
    // const index = players.indexOf(player)
    // setFilterByGenres([
    //   ...filterByGenres.slice(0, index),
    //   { ...player, movies: [...player.movies, movie.title] },
    //   ...filterByGenres.slice(index + 1),
    // ])
    //randomize or remove movie from WatchList --- CODE FOR FUTURE REFERENCE
    console.log('do not want to see this movie')
  }

  function handleSetGenre(genre) {
    if (filterByGenres.includes(genre)) {
      setFilterByGenres(filterByGenres.filter(g => g !== genre))
    } else {
      setFilterByGenres([...filterByGenres, genre])
    }
  }

  function addPlayer(player) {
    setPlayers([{ id: uuidv4(), ...player, movies: [] }, ...players])
  }

  function handleSelection(name) {
    const currentUser = players.find(player => player.name === name)
    setCurrentUser(currentUser)
  }

  function handleDelete(index) {
    setPlayers([...players.slice(0, index), ...players.slice(index + 1)])
    setCurrentUser(players.id === [])
  }

  function handleGenreReset() {
    setFilterByGenres([])
  }

  function handleComparison() {
    const allMovies = setPlayers(players.movies)

    console.log(allMovies)
  }
}
