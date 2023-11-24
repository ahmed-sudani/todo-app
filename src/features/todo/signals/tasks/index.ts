import { computed, effect, signal } from '@preact/signals'
import { TaskType } from '../../types/task'

export const filteredTasks = signal<TaskType[]>([])
export const tasks = signal<TaskType[]>([])
export const completedTasks = computed<TaskType[]>(() => tasks.value.filter((task) => task.completed) || [])
export const uncompletedTasks = computed<TaskType[]>(() => tasks.value.filter((task) => !task.completed) || [])

effect(() => {
  let initTasks = []
  const strTasks = localStorage.getItem('tasks')
  if (strTasks) initTasks = JSON.parse(strTasks)
  tasks.value = initTasks
})

effect(() => {
  if (tasks.value) localStorage.setItem('tasks', JSON.stringify(tasks.value))
})
