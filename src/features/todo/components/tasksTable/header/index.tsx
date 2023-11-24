export default function TasksTableHeader() {
  return (
    <thead>
      <tr>
        <th scope="col">Task</th>
        <th scope="col" className="hidden sm:table-cell">
          Created
        </th>
        <th scope="col" className="hidden sm:table-cell">
          Status
        </th>
        <th scope="col">Action</th>
        <th scope="col">Delete</th>
      </tr>
    </thead>
  )
}
