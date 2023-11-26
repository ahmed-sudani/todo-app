import { beforeEach, describe, expect, it } from 'vitest'
import { cleanup, createEvent, fireEvent, render } from '@testing-library/preact'
import TaskFilter from '..'

beforeEach(cleanup)

describe('TaskFilter', () => {
  it('should render successfully', () => {
    const { container } = render(<TaskFilter />)
    expect(container).toMatchSnapshot()
  })
  it("should render with active class in 'all' btn", () => {
    const taskFilter = render(<TaskFilter />)
    const filterBtnAll = taskFilter.getByTestId('feature-todo-tasks-filter-btn-all')
    expect(filterBtnAll.classList.contains('active')).toBeTruthy()
  })
  it("should change active class from 'all' button to 'completed' button correctly", () => {
    const taskFilter = render(<TaskFilter />)
    const filterBtnAll = taskFilter.getByTestId('feature-todo-tasks-filter-btn-all')
    expect(filterBtnAll.classList.contains('active')).toBeTruthy()
    const filterBtnCompleted = taskFilter.getByTestId('feature-todo-tasks-filter-btn-completed')
    fireEvent(filterBtnCompleted, createEvent('click', filterBtnCompleted))
    expect(filterBtnAll.classList.contains('active')).toBeFalsy()
    expect(filterBtnCompleted.classList.contains('active')).toBeTruthy()
  })
  it("should change active class from 'all' button to 'uncompleted' button correctly", () => {
    const taskFilter = render(<TaskFilter />)
    const filterBtnAll = taskFilter.getByTestId('feature-todo-tasks-filter-btn-all')
    expect(filterBtnAll.classList.contains('active')).toBeTruthy()
    const filterBtnUncompleted = taskFilter.getByTestId('feature-todo-tasks-filter-btn-uncompleted')
    fireEvent(filterBtnUncompleted, createEvent('click', filterBtnUncompleted))
    expect(filterBtnAll.classList.contains('active')).toBeFalsy()
    expect(filterBtnUncompleted.classList.contains('active')).toBeTruthy()
  })
})
