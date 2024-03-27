import './styles/index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages'
import TodoPage from './pages/todo'
import { render } from 'preact'

const router = createBrowserRouter([
  {
    element: <Home />,
    path: '/',
  },
  {
    element: <TodoPage />,
    path: '/todo',
  },
])

render(<RouterProvider router={router} />, document.getElementById('app')!)
