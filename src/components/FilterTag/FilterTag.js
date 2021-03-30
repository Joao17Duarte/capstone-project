import styled from 'styled-components/macro'
import Button from '../Button/Button'

export default function FilterTag({ onSetGenre, genres, filterByGenre }) {
  return (
    <>
      <GenreTitle>Pick your Genre(s):</GenreTitle>
      <TagsWrapper>
        {genres.map((genre, index) => (
          <Button
            active={filterByGenre.includes(genre.id)}
            key={index}
            onClick={() => onSetGenre(genre.id)}
          >
            {genre.name}
          </Button>
        ))}
      </TagsWrapper>
    </>
  )
}

const GenreTitle = styled.p`
  display: grid;
  text-align: center;
  justify-content: center;
`

const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
`
