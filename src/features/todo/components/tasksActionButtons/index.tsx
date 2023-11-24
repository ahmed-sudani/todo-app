import { completeAllTasks, deleteAllCompletedTasks } from '../../util/tasks'
import Button from '../../../../core/components/button'

export default function TasksActionButtons() {
  return (
    <div className="flex gap-1 sm:justify-end justify-start items-center">
      <Button text="Complete All Tasks" onClick={completeAllTasks} className="btn-primary" />
      <Button text="Delete Completed Tasks" onClick={deleteAllCompletedTasks} className="btn-danger" />
    </div>
  )
}
