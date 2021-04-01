import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'

import Card from './Card'

import posterImg from './test_img.jpg'

const allGenres = [{ name: 'Drama' }, { name: 'Action' }]
const genresNames = allGenres
const genresMovie = [{ name: 'Drama' }, { name: 'Action' }]

describe('Card', () => {
  it('renders a card with a name and an image', () => {
    render(
      <MemoryRouter>
        <Card
          title="Batman"
          poster={posterImg}
          allGenres={allGenres}
          genresMovie={genresMovie}
          genresNames={genresNames}
        />
      </MemoryRouter>
    )
    expect(screen.getByText('Batman')).toBeInTheDocument()
    expect(screen.getByRole('img')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Drama' })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Add Movie' })
    ).toBeInTheDocument()
  })
})
