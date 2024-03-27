import { Link } from 'react-router-dom'
import ToggleMode from '../toggleMode'

export default function Nav() {
  return (
    <nav className="flex xl:px-40 p-10 py-2.5 shadow items-center dark:bg-gray-1000 gap-5">
      <Link to="/">
        <div className="flex items-center gap-2">
          <img className="w-10 dark:invert" src="./icons/edit.svg" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white cursor-pointer">
            Todo
          </span>
        </div>
      </Link>

      <ToggleMode className="ml-auto" />
      <a href="https://github.com/ahmed-sudani/todo-app" target="_blank" rel="noopener noreferrer">
        <img className="dark:invert" src="./icons/github.svg" />
      </a>
    </nav>
  )
}
