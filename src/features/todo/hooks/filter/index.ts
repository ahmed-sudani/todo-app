import { completedTasks, filteredTasks, tasks, uncompletedTasks } from '../../signals/tasks'
import { effect, signal } from '@preact/signals'
import { TASKS_TO_SHOW } from '../../types/task'
import { filterTasksByText } from '../../util/tasks'

export default function useFilterTasks() {
  const searchText = signal<string>('')
  const tasksToShow = signal<TASKS_TO_SHOW>(TASKS_TO_SHOW.ALL)

  effect(() => {
    if (tasks.value)
      switch (tasksToShow.value) {
        case TASKS_TO_SHOW.COMPLETED:
          filteredTasks.value = filterTasksByText({
            tasks: completedTasks.value,
            text: searchText.value,
          })
          break
        case TASKS_TO_SHOW.UNCOMPLETED:
          filteredTasks.value = filterTasksByText({
            tasks: uncompletedTasks.value,
            text: searchText.value,
          })
          break
        default:
          filteredTasks.value = filterTasksByText({
            tasks: tasks.value,
            text: searchText.value,
          })
          break
      }
  })

  return { searchText, tasksToShow }
}
