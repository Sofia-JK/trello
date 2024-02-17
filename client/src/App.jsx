import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Auth />,}
])

const authRouter = createBrowserRouter([
  {
    path: '/',
    element: <Auth />}  
])

const authRouterAdmin = createBrowserRouter([
  {
    path: '/',
    element: <Auth />}  
])

function App() {

  const token = useSelector((state) => state.auth.token)
  const role = useSelector((state) => state.auth.role)

  console.log(token);


  return (
    token ? role === "ADMIN" ? <RouterProvider router={authRouterAdmin} /> : <RouterProvider router={authRouter} /> :
    <RouterProvider router={router} />
  )
}

export default App
