import { render, screen } from '@testing-library/react'
import Main from '.'

render(<Main />)

test('teste', () => {
  expect(screen.getByText('Next.js!'))
})
