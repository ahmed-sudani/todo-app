import { beforeEach, describe, expect, it } from 'vitest'
import {
  completeAllTasks,
  completeTaskById,
  createTask,
  deleteAllCompletedTasks,
  deleteAllTasks,
  deleteTaskById,
  updateTask,
} from '.'
import { completedTasks, tasks } from '../../signals/tasks'
import { cleanup } from '@testing-library/preact'

beforeEach(deleteAllTasks)
beforeEach(cleanup)

describe('tasks', () => {
  it('should create a new task successfully', () => {
    const taskA = createTask('a')
    expect(tasks.value[0].text).toEqual(taskA.text)
  })
  it('should update task successfully', () => {
    const taskA = createTask('a')
    expect(tasks.value[0].text).toEqual(taskA.text)
    const updatedTaskA = updateTask(taskA.id, { text: 'b' })
    expect(tasks.value[0].text).toEqual(updatedTaskA.text)
  })
  it('should complete task by id successfully', () => {
    const taskA = createTask('a')
    completeTaskById(taskA.id)
    expect(tasks.value[0].completed).toEqual(true)
    expect(tasks.value[0].completedDate).toBeTruthy()
  })
  it('should complete all tasks successfully', () => {
    createTask('a')
    createTask('b')
    expect(completedTasks.value).toHaveLength(0)
    completeAllTasks()
    expect(completedTasks.value).toHaveLength(2)
  })
  it('should delete task by id successfully', () => {
    const taskA = createTask('a')
    deleteTaskById(taskA.id)
    expect(tasks.value).toHaveLength(0)
  })
  it('should delete all completed tasks successfully', () => {
    const taskA = createTask('a')
    completeTaskById(taskA.id)
    createTask('c')
    deleteAllCompletedTasks()
    expect(tasks.value).toHaveLength(1)
  })
})
