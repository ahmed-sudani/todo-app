import { beforeEach, describe, expect, it } from 'vitest'
import { cleanup, renderHook } from '@testing-library/preact'
import { createTask, deleteAllTasks, updateTask } from '../../util/tasks'
import { TASKS_TO_SHOW } from '../../types/task'
import { filteredTasks } from '../../signals/tasks'
import { signalSetter } from '../../../../core/util/signalSetter'
import useFilterTasks from '.'

beforeEach(cleanup)
beforeEach(deleteAllTasks)

describe('Tasks Filter Hook', () => {
  it('should search for task by text successfully', () => {
    const taskA = createTask('a')
    createTask('b')
    const filterHook = renderHook(useFilterTasks)
    const setSearch = signalSetter(filterHook.result.current.searchText)
    setSearch(taskA.text)
    expect(filteredTasks.value).toHaveLength(1)
    expect(filteredTasks.value[0].text).toEqual(taskA.text)
  })
  it('should filter tasks by completed tasks successfully', () => {
    const taskA = createTask('a')
    createTask('b')
    updateTask(taskA.id, { completed: true })
    const hook = renderHook(useFilterTasks)
    const setTasksToShow = signalSetter(hook.result.current.tasksToShow)
    setTasksToShow(TASKS_TO_SHOW.COMPLETED)
    expect(filteredTasks.value).toHaveLength(1)
    expect(filteredTasks.value[0].completed).toEqual(true)
  })
})
