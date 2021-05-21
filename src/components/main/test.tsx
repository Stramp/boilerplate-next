import { render, screen } from '@testing-library/react'
import Main from '.'

render(<Main text="MAIN" />)

test('teste', () => {
  expect(screen.getByText('MAIN'))
})
