/* eslint-disable no-unused-vars */
export type TaskType = {
  readonly id: string
  text: string
  completed: boolean
  createdDate: number
  completedDate?: number
}

export enum TASKS_TO_SHOW {
  ALL = 0,
  COMPLETED = 1,
  UNCOMPLETED = 2,
}
