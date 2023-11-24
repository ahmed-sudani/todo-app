import { TaskType } from '../../../../types/task'
import timeSince from '../../../../../../core/util/timeSince'

export default function TaskStatus({ task }: { task: Pick<TaskType, 'completed' | 'completedDate'> }) {
  if (!task.completed) return <div className="task-status task-status-uncompleted mx-auto" />
  return (
    <div className="flex items-center justify-center">
      <div className="task-status task-status-completed mr-2" />
      <div className="hidden sm:block">{timeSince(task.completedDate!)}</div>
    </div>
  )
}
