import { completedTasks, tasks, uncompletedTasks } from '../../signals/tasks'
import { TaskType } from '../../types/task'

export const createTask = (task: string) => {
  const newTask: TaskType = {
    completed: false,
    createdDate: Date.now(),
    id: crypto.randomUUID(),
    text: task.trim(),
  }
  if (tasks.value) tasks.value = [...tasks.value, newTask]
  else tasks.value = [newTask]
  return newTask
}

export const updateTask = (id: string, task: Partial<TaskType>) => {
  const newTasks = tasks.value
  const ti = newTasks.findIndex((task) => task.id === id)
  const updatedTask = { ...tasks.value[ti], ...task }
  tasks.value[ti] = updatedTask
  tasks.value = [...newTasks]
  return updatedTask
}

export const completeTaskById = (id: string): TaskType =>
  updateTask(id, {
    completed: true,
    completedDate: Date.now(),
  })

export const completeAllTasks = () => {
  if (!uncompletedTasks.value.length) return
  uncompletedTasks.value.forEach((task) => completeTaskById(task.id))
}

export const deleteAllCompletedTasks = () => {
  if (!completedTasks.value.length) return
  tasks.value = uncompletedTasks.value
}

export const filterTasksByText = ({ tasks, text }: { tasks: TaskType[]; text: string }) => {
  if (!text) return tasks
  return tasks.filter((task) => task.text.search(text) !== -1)
}

export const deleteTaskById = (id: string) => {
  tasks.value = tasks.value.filter((task) => task.id !== id)
}

export const deleteAllTasks = () => {
  tasks.value = []
}
