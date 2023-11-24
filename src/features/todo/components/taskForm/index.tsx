import Button from '../../../../core/components/button'
import Input from '../../../../core/components/input'
import { JSXInternal } from 'preact/src/jsx'
import { createTask } from '../../util/tasks'
import { useRef } from 'preact/hooks'

export default function TaskForm() {
  const textRef = useRef<HTMLInputElement>(null)

  const handelOnSubmit = (event: JSXInternal.TargetedEvent<HTMLFormElement, Event>) => {
    event.preventDefault()
    if (!textRef.current?.value) return
    createTask(textRef.current.value)
    textRef.current.value = ''
  }

  return (
    <form className="flex mt-5" onSubmit={handelOnSubmit}>
      <Input
        required
        innerRef={textRef}
        className="rounded-r-none flex-grow"
        pattern="([^\s]\s?)+"
        placeholder="Enter a task"
        data-testid="feature-todo-create-task-input"
      />
      <Button
        type="submit"
        className="btn-primary rounded-l-none"
        text="Create Task"
        data-testid="feature-todo-create-task-btn"
      />
    </form>
  )
}
