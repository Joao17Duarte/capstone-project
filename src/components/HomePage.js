import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import Button from './Button/Button'

import Header from './Header/Header'
import User from './User/User'
import UserInput from './UserInput/UserInput'
export default function HomePage({
  players,
  addPlayer,
  onHandleDelete,
  onHandleSelection,
}) {
  return (
    <>
      <Header name="Movie Picker" />

      <UserInput
        labelText="Insert your Names:"
        placeholder="John Doe"
        onAddPlayer={addPlayer}
        players={players}
      ></UserInput>
      {players.map(({ name }, index) => (
        <User
          key={index}
          name={name}
          onHandleDelete={() => onHandleDelete(index)}
          onHandleSelection={() => onHandleSelection(name)}
        />
      ))}
      <Subtitle>(Click the player name to start a search)</Subtitle>
      <ButtonWrapper>
        <MenuButton as={Link} to="/search">
          Click here to Search for Movies
        </MenuButton>
      </ButtonWrapper>
    </>
  )
}

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
const Subtitle = styled.span`
  display: flex;
  justify-content: center;
  font-size: 0.7rem;
  margin-bottom: 30px;
`
