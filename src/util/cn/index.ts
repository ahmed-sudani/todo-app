import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export default function cn(...className: ClassValue[]) {
  return twMerge(clsx(className))
}
