import Button from '../../../../../../core/components/button'
import { TaskType } from '../../../../types/task'
import { updateTask } from '../../../../util/tasks'

export default function ActionButton({ task }: { task: Pick<TaskType, 'completed' | 'id' | 'text'> }) {
  const onUnDoneClick = () =>
    updateTask(task.id, {
      completed: false,
      completedDate: 0,
    })

  const onDoneClick = () =>
    updateTask(task.id, {
      completed: true,
      completedDate: Date.now(),
    })

  if (task.completed)
    return (
      <Button
        text="incomplete"
        className={['btn-secondary', 'btn-yellow']}
        onClick={onUnDoneClick}
        data-testid={`feature-todo-tasks-table-row-btn-incomplete-${task.text}`}
      />
    )
  return (
    <Button
      text="complete"
      className="btn-secondary"
      onClick={onDoneClick}
      data-testid={`feature-todo-tasks-table-row-btn-complete-${task.text}`}
    />
  )
}
