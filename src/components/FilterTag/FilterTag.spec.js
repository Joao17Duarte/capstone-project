import { render, screen } from '@testing-library/react'

import FilterTag from './FilterTag'

const genres = [{ name: 'Drama' }, { name: 'Action' }]

const filterByGenre = [{ id: 12 }, { id: 16 }]

describe('FilterTag', () => {
  it('renders a button with a type of genre', () => {
    render(<FilterTag genres={genres} filterByGenre={filterByGenre} />)
    expect(screen.getByText('Action', 'Drama')).toBeInTheDocument()
  })
})
