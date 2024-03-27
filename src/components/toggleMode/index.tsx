import { JSXInternal } from 'preact/src/jsx'
import cn from '../../util/cn'

export default function ToggleMode({ className, ...props }: JSXInternal.HTMLAttributes<HTMLDivElement>) {
  const theme = localStorage.getItem('theme')
  if (theme) window.document.documentElement.classList.add(theme)
  const handleOnToggleModeClick = () => {
    if (window.document.documentElement.classList.contains('dark')) {
      window.document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', '')
    } else {
      window.document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
  }

  return (
    <div onClick={handleOnToggleModeClick} className={cn('cursor-pointer', className)} {...props}>
      <img src="./icons/moonStars.svg" className="dark:hidden" />
      <img src="./icons/sun.svg" className="hidden dark:block" />
    </div>
  )
}
