import { createBrowserRouter, Router, RouterProvider } from "react-router-dom"
import Home from "./Pages/Home"
import SignIn from "./Pages/SignIn"
import SignUp from "./Pages/SignUp"
import Profile from "./Pages/Profile"
import ForgotPassword from "./Pages/ForgotPassword/compon/ForgotPassword"



function App() {
  const router = createBrowserRouter([
  {
    index: true,
    element: <Home/>
  }  ,
  {
    path: "login",
    element: <SignIn/>
  }  ,
  {
    path: "signup",
    element: <SignUp/>
  } ,
  {
    path: "profile",
    element: <Profile/>
  },
  {
    path: "forgotpassword",
    element: <ForgotPassword/>
  }
  ]
  )
  

  return (
    <>
  <RouterProvider router={router} />
    </>
  )
}

export default App
