import { describe, expect, it } from 'vitest'
import Button from '..'
import { render } from '@testing-library/preact'

describe('Button', () => {
  it('should render successfully', () => {
    const text = 'test'
    const { container } = render(<Button text={text} />)
    expect(container).toMatchSnapshot()
  })
  it('should display text successfully', () => {
    const text = 'test'
    const { container } = render(<Button text={text} />)
    expect(container.textContent).toEqual(text)
  })
})
