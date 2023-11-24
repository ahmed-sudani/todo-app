import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, fireEvent, render } from '@testing-library/preact'
import TaskForm from '.'

afterEach(cleanup)

describe('TaskForm', () => {
  it('should render successfully', () => {
    const { container } = render(<TaskForm />)
    expect(container).toMatchSnapshot()
  })
  it('should empty input after submit successfully', () => {
    const taskForm = render(<TaskForm />)
    const taskCreateInput = taskForm.getByTestId('feature-todo-create-task-input') as HTMLInputElement
    const taskCreateBtn = taskForm.getByTestId('feature-todo-create-task-btn') as HTMLInputElement
    taskCreateInput.value = 'a'
    fireEvent.click(taskCreateBtn)
    expect(taskCreateInput.value).toBeFalsy()
  })
})
