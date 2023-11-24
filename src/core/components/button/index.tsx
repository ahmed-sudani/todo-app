import { ClassValue } from 'clsx'
import { JSXInternal } from 'preact/src/jsx'
import { Signal } from '@preact/signals'
import cn from '../../util/cn'

export default function Button({
  text,
  className,
  ...props
}: { text: string | Signal<string>; className?: ClassValue } & Omit<
  JSXInternal.HTMLAttributes<HTMLButtonElement>,
  'className'
>) {
  return (
    <button className={cn('btn btn-rounded', className)} {...props}>
      {text}
    </button>
  )
}
