import Input from '.'
import { JSXInternal } from 'preact/src/jsx'
import { Ref } from 'preact'
import cn from '../../util/cn'

export default function InputWithSvg({
  img: { className: imgClassName, ...imgProps },
  input: { className: inputClassName, ...inputProps },
}: {
  img: JSXInternal.HTMLAttributes<HTMLImageElement>
  input: { innerRef?: Ref<HTMLInputElement> } & Omit<JSXInternal.HTMLAttributes<HTMLInputElement>, 'ref'>
}) {
  return (
    <div className="relative">
      <label htmlFor={inputProps.id} className="absolute inset-y-0 left-0 flex items-center pl-3">
        <img className={cn('w-4 h-4 text-gray-500 dark:text-gray-400', imgClassName)} {...imgProps} />
      </label>
      <Input className={['pl-10', inputClassName]} {...inputProps} />
    </div>
  )
}
