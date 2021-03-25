import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from './Button/Button'
import Header from './Header/Header'

export default function ResultsPage(players) {
  return (
    <>
      <Header name="Movie Picker" />
      <ResultsWrapper>
        Here are shown the Results from your Picks:
        <MovieList>
          <MovieName>
            <em>Work in progress</em>
          </MovieName>
        </MovieList>
      </ResultsWrapper>
      <ButtonWrapper>
        <MenuButton as={Link} to="/">
          Home
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
const ResultsWrapper = styled.section`
  margin: 10px;
  padding: 10px;
  text-align: center;
`
const MovieList = styled.div`
  display: grid;
  gap: 10px;
  justify-content: center;
  justify-items: center;
  margin: 20px auto;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #eee;
  background: transparent;
  text-align: center;
  width: 300px;
`
const MovieName = styled.p`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: gold;
  text-align: center;
`
