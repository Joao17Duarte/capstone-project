import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'

import User from './User'

describe('User', () => {
  it('renders a User with a name', () => {
    render(
      <MemoryRouter>
        <User name="Jon" />
      </MemoryRouter>
    )

    expect(screen.getByText('Jon')).toBeInTheDocument()
  })
})
