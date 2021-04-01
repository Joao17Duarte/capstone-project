import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from './Button/Button'
import Header from './Header/Header'

export default function ResultsPage(results) {
  return (
    <>
      <Header name="Movie Picker" />
      <ResultsWrapper>
        The Results from your Picks:
        {results.results.length !== 0 ? (
          <>
            <MovieList>
              {results.results.map((result, index) => (
                <MovieName key={index}>{result}</MovieName>
              ))}
            </MovieList>
            <Text>Have Fun !!</Text>
            <Text>Don't forget the 🍿</Text>
          </>
        ) : (
          <NoMatchText>Sorry no Match Found</NoMatchText>
        )}
      </ResultsWrapper>
      <ButtonWrapper>
        <MenuButton as={Link} to="/">
          Home
        </MenuButton>
        <MenuButton as={Link} to="/search">
          Search
        </MenuButton>
      </ButtonWrapper>
    </>
  )
}

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
`
const MovieName = styled.p`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: gold;
  text-align: center;
`
const Text = styled.span`
  display: grid;
  gap: 10px;
  text-align: center;
  margin: 10px;
`
const NoMatchText = styled.span`
  display: grid;
  gap: 10px;
  text-align: center;
  margin: 50px;
  color: gold;
  font-size: 2rem;
`
