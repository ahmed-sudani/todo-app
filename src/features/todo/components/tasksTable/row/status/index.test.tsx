import { beforeEach, describe, expect, it } from 'vitest'
import { cleanup, render } from '@testing-library/preact'
import TaskStatus from '.'

beforeEach(cleanup)

describe('TaskStatus', () => {
  it('should render with task-status-completed class', () => {
    const { container } = render(<TaskStatus task={{ completed: true }} />)
    expect(container.querySelector('.task-status-completed')).toBeInTheDocument()
    expect(container.querySelector('.task-status-uncompleted')).not.toBeInTheDocument()
  })

  it('should render with task-status-uncompleted class', () => {
    const { container } = render(<TaskStatus task={{ completed: false }} />)
    expect(container.querySelector('.task-status-uncompleted')).toBeInTheDocument()
    expect(container.querySelector('.task-status-completed')).not.toBeInTheDocument()
  })
})
