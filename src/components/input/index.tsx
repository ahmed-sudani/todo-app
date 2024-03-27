import { ClassValue } from 'clsx'
import { JSXInternal } from 'preact/src/jsx'
import { Ref } from 'preact'
import cn from '../../util/cn'
export default function Input({
  className,
  innerRef,
  ...props
}: { className?: ClassValue; innerRef?: Ref<HTMLInputElement> } & Omit<
  JSXInternal.HTMLAttributes<HTMLInputElement>,
  'className' | 'ref'
>) {
  return (
    <input
      type="text"
      className={cn('input dark:bg-gray-950 dark:disabled:bg-inherit dark:border-none dark:text-gray-200', className)}
      ref={innerRef}
      {...props}
    />
  )
}
