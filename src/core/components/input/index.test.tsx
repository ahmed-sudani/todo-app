import { describe, expect, it } from 'vitest'
import Input from '.'

import { render } from '@testing-library/preact'

describe('Input', () => {
  it('should render successfully', () => {
    const { container } = render(<Input />)
    expect(container).toMatchSnapshot()
  })
})
