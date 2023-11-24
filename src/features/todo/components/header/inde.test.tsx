import { describe, expect, it } from 'vitest'
import TodoHeader from '.'

import { render } from '@testing-library/preact'

describe('TodoHeader', () => {
  it('should render successfully', () => {
    const { container } = render(<TodoHeader />)
    expect(container).toMatchSnapshot()
  })
})
