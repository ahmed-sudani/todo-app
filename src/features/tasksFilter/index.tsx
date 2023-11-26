import FilterButtons from './buttons'
import SearchInput from './searchInput'

import useFilterTasks from '../../hooks/filter'

export default function TaskFilter() {
  const { tasksToShow, searchText } = useFilterTasks()

  return (
    <div className="flex items-center gap-5 flex-wrap">
      <SearchInput searchText={searchText} />
      <FilterButtons tasksToShow={tasksToShow} />
    </div>
  )
}
