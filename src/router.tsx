import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    element: <div>Router element</div>,
    path: '/',
  },
  {
    element: <div>This is card</div>,
    path: '/card',
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
