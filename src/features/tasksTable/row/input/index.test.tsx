import { afterAll, beforeEach, describe, expect, it } from 'vitest'
import { cleanup, fireEvent, render } from '@testing-library/preact'
import TaskEditInput from '.'
import { TaskType } from '../../../../types/task'
import { deleteAllTasks } from '../../../../util/tasks'

const taskA: Pick<TaskType, 'text' | 'id'> = { id: '1', text: 'a' }

beforeEach(cleanup)
afterAll(deleteAllTasks)

describe('TaskEditInput', () => {
  it('should render with task text value successfully', () => {
    const taskEditInput = render(<TaskEditInput task={taskA} />)
    const input = taskEditInput.getByTestId(`feature-todo-tasks-table-row-edit-input-${taskA.text}`) as HTMLInputElement
    expect(input.value).toEqual(taskA.text)
  })
  it('should render with disabled input successfully', () => {
    const taskEditInput = render(<TaskEditInput task={taskA} />)
    const input = taskEditInput.getByTestId(`feature-todo-tasks-table-row-edit-input-${taskA.text}`)
    expect(input).toBeDisabled()
  })
  it('should enable input after clicking icon successfully', () => {
    const taskEditInput = render(<TaskEditInput task={taskA} />)
    const editInputIcon = taskEditInput.getByTestId(`feature-todo-tasks-table-row-edit-input-${taskA.text}-icon`)
    fireEvent.click(editInputIcon)
    const input = taskEditInput.getByTestId(`feature-todo-tasks-table-row-edit-input-${taskA.text}`)
    expect(input).not.toBeDisabled()
  })
  it('should disable input after blur successfully', () => {
    const taskEditInput = render(<TaskEditInput task={taskA} />)
    const editInputIcon = taskEditInput.getByTestId(`feature-todo-tasks-table-row-edit-input-${taskA.text}-icon`)
    fireEvent.click(editInputIcon)
    const input = taskEditInput.getByTestId(`feature-todo-tasks-table-row-edit-input-${taskA.text}`)
    expect(input).not.toBeDisabled()
    fireEvent.blur(input)
    expect(input).toBeDisabled()
  })
})
