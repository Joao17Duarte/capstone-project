import styled from 'styled-components/macro'
import Button from '../Button/Button'

export default function Card({
  title,
  image,
  release_date,
  genresMovie,
  allGenres,

  onAddToWatchlist,
}) {
  const IMG_API = 'https://image.tmdb.org/t/p/'

  const genresNames = allGenres
    .filter(g => genresMovie.includes(g.id))
    .map(g => g.name)

  return (
    <>
      <CardGrid>
        <span>{title}</span>
        <span>({release_date})</span>
        <Poster src={`${IMG_API}w185${image}`} alt="" />
        <GenreWrapper>
          {genresNames.map((genre, index) => (
            <Button key={index}>{genre}</Button>
          ))}
        </GenreWrapper>
        <ButtonWrapper>
          <AddButton onClick={onAddToWatchlist}>Add Movie</AddButton>
        </ButtonWrapper>
      </CardGrid>
    </>
  )
}

const CardGrid = styled.div`
  display: grid;
  text-align: center;
  justify-content: center;
  margin: 20px auto;
  gap: 10px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #ddd;
  max-width: 350px;
`

const Poster = styled.img`
  border-radius: 10px;
  box-shadow: 0px 0px 10px black;
  margin: auto;
`

const GenreWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  font-size: 10px;
`

const ButtonWrapper = styled.div`
  text-align: center;
`

const AddButton = styled(Button)`
  background: forestgreen;
  color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 10px green;
  padding: 10px 50px;
`
