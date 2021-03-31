import styled from 'styled-components/macro'
import Button from '../Button/Button'

export default function UserInput({ labelText, placeholder, onAddPlayer }) {
  return (
    <FormGrid onSubmit={handleSubmit}>
      <label>
        {labelText}
        <input
          name="playerName"
          required
          placeholder={placeholder}
          type="text"
          minLength="2"
          maxLength="20"
          autoComplete="off"
        />
      </label>
      <AddButton>Add Name</AddButton>
    </FormGrid>
  )
  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const { playerName } = form.elements

    onAddPlayer({
      name:
        playerName.value.slice(0, 1).toUpperCase() + playerName.value.slice(1),
    })
    form.reset()
    playerName.focus()
  }
}

const FormGrid = styled.form`
  display: grid;
  gap: 4px;
  justify-content: center;
  label {
    display: grid;
    gap: 10px;
    text-align: center;
  }
  input {
    border: 2px solid #bbb;
    border-radius: 10px;
    margin-bottom: 10px;
  }
  input:focus {
    outline: none;
  }
`

const AddButton = styled(Button)`
  background-color: #6d676e;
  color: white;
`
