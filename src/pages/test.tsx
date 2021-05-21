import { render } from '@testing-library/react'
import Main from '.'

const { container } = render(<Main />)

test('teste', () => {
  expect(container.firstChild).toBeInTheDocument()
  expect(container.firstChild).toHaveStyle({ background: 'red' })
})
