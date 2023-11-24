import Header from '../header'
import TaskFilter from '../tasksFilter'
import TaskForm from '../taskForm'
import TasksActionButtons from '../tasksActionButtons'
import TasksTable from '../tasksTable'
export default function Todo() {
  return (
    <div className="flex flex-col gap-4 mx-2 sm:mx-auto mt-5 max-w-4xl p-2 sm:p-6 border border-gray-200 rounded-lg shadow">
      <Header />
      <TaskForm />
      <TaskFilter />
      <TasksActionButtons />
      <TasksTable />
    </div>
  )
}
