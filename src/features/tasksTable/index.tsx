import TasksTableBody from './body'
import TasksTableHeader from './header'
import { filteredTasks } from '../../signals/filter'

export default function TasksTable() {
  return (
    <table className="text-left border-separate border-spacing-x-0.5 border-spacing-y-1">
      <TasksTableHeader />
      <TasksTableBody tasks={filteredTasks} />
    </table>
  )
}
