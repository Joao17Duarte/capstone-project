import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import Button from './Button/Button'
import FilterTag from './FilterTag/FilterTag'

export default function SearchPage({
  genres,
  onSetGenre,
  filterByGenre,
  currentUser,
}) {
  return (
    <>
      <TagName>{currentUser.name}</TagName>
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
