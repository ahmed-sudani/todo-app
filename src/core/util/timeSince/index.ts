const formateInterval = (label: string, interval: number) => `${Math.floor(interval)} ${label} ago`

export default function timeSince(date: number) {
  const seconds = Math.floor((new Date().getTime() - date) / 1000)
  const times = [
    ['years', 31536000],
    ['months', 2592000],
    ['days', 86400],
    ['hours', 3600],
    ['minutes', 60],
  ] as const

  for (let index = 0; index < times.length; index += 1) {
    const time = times[index]
    const interval = seconds / time[1]
    if (interval > 1) return formateInterval(time[0], interval)
  }

  return formateInterval('seconds', seconds)
}
