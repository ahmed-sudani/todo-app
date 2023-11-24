import { completedTasks, tasks, uncompletedTasks } from '../tasks'
import { computed } from '@preact/signals'

export const COMPLETED_COUNT_LABEL = computed<string>(() => `${completedTasks.value.length} completed`)
export const UNCOMPLETED_COUNT_LABEL = computed<string>(() => `${uncompletedTasks.value.length} uncompleted`)
export const ALL_TASKS_COUNT_LABEL = computed<string>(() => `${tasks.value.length} all`)
