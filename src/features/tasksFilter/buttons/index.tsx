import { ALL_TASKS_COUNT_LABEL, COMPLETED_COUNT_LABEL, UNCOMPLETED_COUNT_LABEL } from '../../../signals/filter'
import Button from '../../../components/button'
import { Signal } from '@preact/signals'
import { TASKS_TO_SHOW } from '../../../types/task'
import { signalSetter } from '../../../util/signalSetter'

export default function FilterButtons({ tasksToShow }: { tasksToShow: Signal<TASKS_TO_SHOW> }) {
  const setTasksToShow = signalSetter(tasksToShow)

  return (
    <div className="flex gap-1">
      <Button
        data-testid="feature-todo-tasks-filter-btn-all"
        onClick={() => setTasksToShow(TASKS_TO_SHOW.ALL)}
        className={['btn-secondary', { active: tasksToShow.value === TASKS_TO_SHOW.ALL }]}
        text={ALL_TASKS_COUNT_LABEL}
      />
      <Button
        data-testid="feature-todo-tasks-filter-btn-completed"
        onClick={() => setTasksToShow(TASKS_TO_SHOW.COMPLETED)}
        className={['btn-secondary ', { active: tasksToShow.value === TASKS_TO_SHOW.COMPLETED }]}
        text={COMPLETED_COUNT_LABEL}
      />
      <Button
        data-testid="feature-todo-tasks-filter-btn-uncompleted"
        onClick={() => setTasksToShow(TASKS_TO_SHOW.UNCOMPLETED)}
        className={['btn-secondary ', { active: tasksToShow.value === TASKS_TO_SHOW.UNCOMPLETED }]}
        text={UNCOMPLETED_COUNT_LABEL}
      />
    </div>
  )
}
