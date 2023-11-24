import { Signal } from '@preact/signals'
import TaskRow from '../row'
import { TaskType } from '../../../types/task'

export default function TasksTableBody({ tasks }: { tasks: Signal<TaskType[]> }) {
  const TaskRowList = tasks.value.map((task) => <TaskRow key={task.id} task={task} />)
  return <tbody data-testid="feature-todo-tasks-table-rows">{TaskRowList}</tbody>
}
