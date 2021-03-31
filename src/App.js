import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import toast, { Toaster } from 'react-hot-toast'
import SearchPage from './components/SearchPage'
import FilteredMoviesPage from './components/FilteredMoviesPage'
import HomePage from './components/HomePage'
import ResultsPage from './components/ResultsPage'

export default function App() {
  const [players, setPlayers] = useState([])
  const [movies, setMovies] = useState([])
  const [genres, setGenres] = useState([])
  const [filterByGenres, setFilterByGenres] = useState([])
  const [currentUser, setCurrentUser] = useState(players)
  const [results, setResults] = useState([])

  const { REACT_APP_TMDB_API_KEY } = process.env
  const GENRE_API = `https://api.themoviedb.org/3/genre/movie/list?api_key=${REACT_APP_TMDB_API_KEY}&language=en-US`

  useEffect(() => {
    const promisesFromFetch = []
    for (let i = 1; i <= 5; i++) {
      const MOVIE_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${REACT_APP_TMDB_API_KEY}&page=${i}`

      promisesFromFetch.push(fetch(MOVIE_API).then(res => res.json()))
    }
    Promise.all(promisesFromFetch)
      .then(dataList =>
        setMovies([...movies, ...dataList.flatMap(data => data.results)])
      )
      .catch(error => {
        throw error
      })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
            genres={genres}
            onSetGenre={handleSetGenre}
            filterByGenre={filterByGenres}
            currentUser={currentUser}
          />
        </Route>

        <Route path="/filteredmovies">
          <Toaster />
          <FilteredMoviesPage
            filterByGenres={filterByGenres}
            movies={movies}
            genres={genres}
            currentUser={currentUser}
            players={players}
            onAddToWatchlist={handleAddToWatchlist}
            onHandleGenreReset={handleGenreReset}
            onHandleComparison={handleComparison}
          />
        </Route>
        <Route path="/results">
          <ResultsPage
            results={results}
            onHandleComparison={handleComparison}
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
      toast.error('This movie is already in your list!', {
        style: {
          reverseOrder: false,
          position: 'top-center',
          border: '1px solid black',
          marginTop: '130px',
          fontFamily: 'Montserrat',
        },
        icon: '🚨',
      })
    } else {
      setPlayers([
        ...players.slice(0, index),
        { ...player, movies: [...player.movies, movie.title] },
        ...players.slice(index + 1),
      ])
      toast.success('Movie added to your list!', {
        style: {
          reverseOrder: false,
          position: 'top-center',
          border: '1px solid black',
          marginTop: '325px',
          fontFamily: 'Montserrat',
        },
        icon: '🎬',
      })
    }
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
    const numberOfPlayers = players.length

    const results = players
      .map(p => p.movies)
      .flat()
      .reduce((acc, title) => {
        acc[title] ? acc[title]++ : (acc[title] = 1)
        return acc
      }, {})

    const similarMovies = Object.entries(results)
      .filter(movie => movie[1] === numberOfPlayers)
      .map(movie => movie[0])
    setResults(similarMovies)
  }
}
