import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from './Button/Button'
import FilterTag from './FilterTag/FilterTag'
import Header from './Header/Header'

export default function SearchPage({
  genres,
  onSetGenre,
  filterByGenre,
  userSelection,
}) {
  return (
    <>
      <Header name="Movie Picker" />
      <TagName>{userSelection.name}</TagName>
      <FilterTag
        genres={genres}
        onSetGenre={onSetGenre}
        filterByGenre={filterByGenre}
      />

      <ButtonWrapper>
        <MenuButton as={Link} to="/">
          Home
        </MenuButton>
        <MenuButton as={Link} to="/filteredmovies">
          Check out your Filtered Movies
        </MenuButton>
      </ButtonWrapper>
    </>
  )
}

const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 35px;
`
const MenuButton = styled(Button)`
  background-color: #6d676e;
  color: white;
  border-radius: 10px;
  padding: 10px;
`
const TagName = styled.div`
  display: flex;
  justify-content: center;
  color: crimson;
  letter-spacing: 5px;
`
