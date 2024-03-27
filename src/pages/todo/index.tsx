import { completeAllTasks, deleteAllCompletedTasks } from '../../util/tasks'
import Button from '../../components/button'
import Header from '../../components/header'
import Nav from '../../components/nav'
import TaskFilter from '../../features/tasksFilter'
import TaskForm from '../../features/taskForm'
import TasksTable from '../../features/tasksTable'

export default function TodoPage() {
  return (
    <>
      <Nav />
      <div className="flex flex-col gap-4 mx-2 sm:mx-auto mt-5 max-w-4xl p-2 sm:p-6 border border-gray-200 rounded-lg shadow dark:bg-gray-1000 dark:border-none">
        <Header />
        <TaskForm />
        <TaskFilter />
        <div className="flex gap-1 sm:justify-end justify-start items-center">
          <Button text="Complete All Tasks" onClick={completeAllTasks} className="btn-primary" />
          <Button text="Delete Completed Tasks" onClick={deleteAllCompletedTasks} className="btn-danger" />
        </div>
        <TasksTable />
      </div>
    </>
  )
}
