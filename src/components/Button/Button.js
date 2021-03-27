import styled from 'styled-components/macro'

export default styled.button`
  font-size: 0.8rem;
  padding: 8px;
  border-radius: 10px;
  border: none;
  text-align: center;
  justify-content: center;
  text-decoration: none;
  background: ${p => (p.active ? '#96031A' : '#ddd')};
  color: ${p => (p.active ? 'white' : 'black')};
  font-family: inherit;
  margin: 2px 5px;
`
