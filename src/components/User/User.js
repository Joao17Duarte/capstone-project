import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import Button from '../Button/Button'

export default function User({ name, onHandleDelete, onHandleSelection }) {
  return (
    <>
      <PlayerWrapper onClick={onHandleSelection}>
        <PlayerName as={Link} to="/search">
          {name}
        </PlayerName>
        <Button onClick={onHandleDelete}>X</Button>
      </PlayerWrapper>
    </>
  )
}

const PlayerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  justify-self: center;
  align-content: center;
  margin: 20px auto;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #eee;
  background: snow;
  width: 95%;
`
const PlayerName = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
`
