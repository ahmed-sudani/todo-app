import { useRef, useState } from 'preact/hooks'
import InputWithSvg from '../../../../components/input/input.with.svg'
import { TaskType } from '../../../../types/task'
import { updateTask } from '../../../../util/tasks'

export default function TaskEditInput({ task }: { task: Pick<TaskType, 'id' | 'text'> }) {
  const [isDisabled, setIsDisabled] = useState(true)
  const inputRef = useRef<HTMLInputElement>(null)

  const handelOnEditIconClick = () => setIsDisabled((prev) => !prev)
  const handelOnInputBlur = () => {
    const text = inputRef.current?.value.trim()
    if (!text) return
    updateTask(task.id, { text })
    setIsDisabled(true)
  }

  const inputProps = {
    img: {
      className: 'cursor-pointer',
      'data-testid': `feature-todo-tasks-table-row-edit-input-${task.text}-icon`,
      onClick: handelOnEditIconClick,
      src: './icons/edit.svg',
    },
    input: {
      className: 'disabled:border-none disabled:bg-inherit w-full',
      'data-testid': `feature-todo-tasks-table-row-edit-input-${task.text}`,
      disabled: isDisabled,
      id: task.id,
      innerRef: inputRef,
      onBlur: handelOnInputBlur,
      value: task.text,
    },
  }
  return <InputWithSvg {...inputProps} />
}
