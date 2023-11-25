import InputWithSvg from '../../../../../core/components/input/input.with.svg'
import { JSXInternal } from 'preact/src/jsx'
import { Signal } from '@preact/signals'
import { signalSetter } from '../../../../../core/util/signalSetter'

export default function SearchInput({ searchText }: { searchText: Signal<string> }) {
  const setSearchText = signalSetter(searchText)
  const onInput: JSXInternal.GenericEventHandler<HTMLInputElement> = (event) => setSearchText(event.currentTarget.value)
  const inputProps = {
    img: { src: './icons/search.svg' },
    input: {
      'data-testid': 'feature-todo-filter-tasks-input',
      id: 'search',
      onInput,
      placeholder: 'Search for a task',
    },
  }
  return <InputWithSvg {...inputProps} />
}
