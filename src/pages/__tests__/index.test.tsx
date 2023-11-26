/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
import { beforeEach, describe, expect, it } from 'vitest'
import { cleanup, fireEvent, render } from '@testing-library/preact'
import { TaskType } from '../../types/task'
import Todo from '..'
import { deleteAllTasks } from '../../util/tasks'

beforeEach(cleanup)
beforeEach(deleteAllTasks)

describe('Todo', () => {
  const taskA: Pick<TaskType, 'text'> = { text: 'a' }

  it('should render successfully', () => {
    const { container } = render(<Todo />)
    expect(container).toMatchSnapshot()
  })
  it('should create task successfully', () => {
    const todoFeature = render(<Todo />)
    const createTaskBtn = todoFeature.getByTestId('feature-todo-create-task-btn')
    const createTaskInp = todoFeature.getByTestId('feature-todo-create-task-input') as HTMLInputElement
    const tasksTable = todoFeature.getByTestId('feature-todo-tasks-table-rows')
    createTaskInp.value = taskA.text
    fireEvent.click(createTaskBtn)
    expect(tasksTable.children.length).toEqual(1)
    const taskAEditInput = todoFeature.getByTestId(
      `feature-todo-tasks-table-row-edit-input-${taskA.text}`
    ) as HTMLInputElement
    expect(taskAEditInput.value).toEqual(taskA.text)
  })
  it('should complete task successfully', () => {
    const todoFeature = render(<Todo />)
    const createTaskBtn = todoFeature.getByTestId('feature-todo-create-task-btn')
    const createTaskInp = todoFeature.getByTestId('feature-todo-create-task-input') as HTMLInputElement
    createTaskInp.value = taskA.text
    fireEvent.click(createTaskBtn)
    const taskARow = todoFeature.getByTestId(`feature-todo-tasks-table-row-${taskA.text}`)
    expect(taskARow.querySelector('.task-status-uncompleted')).toBeInTheDocument()
    expect(taskARow.querySelector('.task-status-completed')).not.toBeInTheDocument()
    const taskCompleteBtn = todoFeature.getByTestId(`feature-todo-tasks-table-row-btn-complete-${taskA.text}`)
    fireEvent.click(taskCompleteBtn)
    expect(taskARow.querySelector('.task-status-uncompleted')).not.toBeInTheDocument()
    expect(taskARow.querySelector('.task-status-completed')).toBeInTheDocument()
  })
  it('should update task text successfully', () => {
    const todoFeature = render(<Todo />)
    const createTaskBtn = todoFeature.getByTestId('feature-todo-create-task-btn')
    const createTaskInp = todoFeature.getByTestId('feature-todo-create-task-input') as HTMLInputElement
    createTaskInp.value = taskA.text
    fireEvent.click(createTaskBtn)
    const taskAEditInput = todoFeature.getByTestId(
      `feature-todo-tasks-table-row-edit-input-${taskA.text}`
    ) as HTMLInputElement
    taskAEditInput.value = taskA.text
    fireEvent.blur(taskAEditInput)
    expect(taskAEditInput.value).toEqual(taskA.text)
  })
  it('should delete task successfully', () => {
    const todoFeature = render(<Todo />)
    const createTaskBtn = todoFeature.getByTestId('feature-todo-create-task-btn')
    const createTaskInp = todoFeature.getByTestId('feature-todo-create-task-input') as HTMLInputElement
    const tasksTable = todoFeature.getByTestId('feature-todo-tasks-table-rows')
    createTaskInp.value = taskA.text
    fireEvent.click(createTaskBtn)
    expect(tasksTable.children.length).toEqual(1)
    const taskDeleteBtn = todoFeature.getByTestId(`feature-todo-tasks-table-row-btn-delete-${taskA.text}`)
    fireEvent.click(taskDeleteBtn)
    expect(tasksTable.children.length).toEqual(0)
  })
  it('should filter tasks by text successfully', () => {
    const todoFeature = render(<Todo />)
    const createTaskBtn = todoFeature.getByTestId('feature-todo-create-task-btn')
    const createTaskInp = todoFeature.getByTestId('feature-todo-create-task-input') as HTMLInputElement
    const tasksTable = todoFeature.getByTestId('feature-todo-tasks-table-rows')
    createTaskInp.value = taskA.text
    fireEvent.click(createTaskBtn)
    const taskB: Pick<TaskType, 'text'> = { text: 'b' }
    createTaskInp.value = taskB.text
    fireEvent.click(createTaskBtn)
    expect(tasksTable.children.length).toEqual(2)
    const filterTasksInp = todoFeature.getByTestId('feature-todo-filter-tasks-input') as HTMLInputElement
    filterTasksInp.value = taskA.text
    fireEvent.input(filterTasksInp)
    expect(tasksTable.children.length).toEqual(1)
  })
  it('should filter tasks by completed tasks successfully', () => {
    const todoFeature = render(<Todo />)
    const taskA: Pick<TaskType, 'text'> = { text: 'a' }
    const createTaskBtn = todoFeature.getByTestId('feature-todo-create-task-btn')
    const createTaskInp = todoFeature.getByTestId('feature-todo-create-task-input') as HTMLInputElement
    const tasksTable = todoFeature.getByTestId('feature-todo-tasks-table-rows')
    const filterBtnCompleted = todoFeature.getByTestId('feature-todo-tasks-filter-btn-completed')
    const filterBtnAll = todoFeature.getByTestId('feature-todo-tasks-filter-btn-all')
    createTaskInp.value = taskA.text
    fireEvent.click(createTaskBtn)
    fireEvent.click(filterBtnCompleted)
    expect(tasksTable.children.length).toEqual(0)
    fireEvent.click(filterBtnAll)
    const taskCompleteBtn = todoFeature.getByText('complete')
    fireEvent.click(taskCompleteBtn)
    fireEvent.click(filterBtnCompleted)
    expect(tasksTable.children.length).toEqual(1)
  })
  it('should filter tasks by uncompleted tasks successfully', () => {
    const todoFeature = render(<Todo />)
    const taskA: Pick<TaskType, 'text'> = { text: 'a' }
    const createTaskBtn = todoFeature.getByTestId('feature-todo-create-task-btn')
    const createTaskInp = todoFeature.getByTestId('feature-todo-create-task-input') as HTMLInputElement
    const tasksTable = todoFeature.getByTestId('feature-todo-tasks-table-rows')
    const filterBtnUncompleted = todoFeature.getByTestId('feature-todo-tasks-filter-btn-uncompleted')
    createTaskInp.value = taskA.text
    fireEvent.click(filterBtnUncompleted)
    expect(tasksTable.children.length).toEqual(0)
    fireEvent.click(createTaskBtn)
    expect(tasksTable.children.length).toEqual(1)
  })
})
