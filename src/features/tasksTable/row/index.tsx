import ActionButton from './ActionButton'
import Button from '../../../components/button'
import TaskEditInput from './input'
import TaskStatus from './status'
import { TaskType } from '../../../types/task'
import { deleteTaskById } from '../../../util/tasks'
import timeSince from '../../../util/timeSince'

export default function TaskRow({ task }: { task: TaskType }) {
  const onTaskDelete = () => {
    deleteTaskById(task.id)
  }

  return (
    <tr data-testid={`feature-todo-tasks-table-row-${task.text}`}>
      <td>
        <TaskEditInput task={task} />
      </td>
      <td className="hidden sm:table-cell">{timeSince(task.createdDate)}</td>
      <td className="hidden sm:table-cell">
        <TaskStatus task={task} />
      </td>
      <td>
        <ActionButton task={task} />
      </td>
      <td>
        <Button
          text="Delete"
          onClick={onTaskDelete}
          className="btn-danger"
          data-testid={`feature-todo-tasks-table-row-btn-delete-${task.text}`}
        />
      </td>
    </tr>
  )
}
