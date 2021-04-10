import styled from 'styled-components/macro'

export default function Header({ name }) {
  return <HeaderApp>{name}</HeaderApp>
}

const HeaderApp = styled.header`
  position: sticky;
  top: 0;
  text-align: center;
  text-transform: uppercase;
  background: #333;
  padding: 20px;
  margin-bottom: 20px;
  z-index: 1
`
