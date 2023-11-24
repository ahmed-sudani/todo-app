import { describe, expect, it } from 'vitest'
import TasksActionButtons from '.'

import { render } from '@testing-library/preact'

describe('TasksActionButtons', () => {
  it('should render successfully', () => {
    const { container } = render(<TasksActionButtons />)
    expect(container).toMatchSnapshot()
  })
})
