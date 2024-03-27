import Button from '../components/button'
import { Link } from 'react-router-dom'
import Nav from '../components/nav'

export default function TodoPage() {
  return (
    <div class="h-screen flex flex-col">
      <Nav />
      <div className="flex flex-col flex-grow justify-between mt-5">
        <div className="flex gap-5 p-5 max-xl:flex-wrap justify-between mt-auto items-center xl:px-40 px-10">
          <div className="flex flex-col gap-2 items-start xl:basis-1/2">
            <h1 className="text-4xl font-bold dark:text-white">Welcome to Todo - Your Ultimate Task Manager</h1>
            <p className="dark:text-white">
              Effortlessly manage your tasks with Todo. Create, edit, complete, and delete tasks in a snap. Keep track
              of when tasks were created and completed. Filter tasks by completion status and search by task text. Stay
              organized, boost productivity - start using Todo today!
            </p>
            <Link to="./todo">
              <Button className="btn-primary" text="Get Started" />
            </Link>
          </div>
          <img className="dark:hidden xl:w-1/2" src="./icons/todoTable.svg" alt="" srcset="" />
          <img className="hidden dark:block xl:w-1/2" src="./icons/todoTableDark.svg" alt="" srcset="" />
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0099ff"
            fill-opacity="1"
            d="M0,288L48,256C96,224,192,160,288,138.7C384,117,480,139,576,170.7C672,203,768,245,864,256C960,267,1056,245,1152,218.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </div>
  )
}
