import { renderWithTheme } from 'utils/tests/helpers'

import Main from '.'

describe('<Main />', () => {
  it('should render element', () => {
    const { container } = renderWithTheme(<Main />)

    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toHaveStyleRule('color', '#fff')
  })
})
