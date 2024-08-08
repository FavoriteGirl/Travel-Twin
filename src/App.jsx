
import { createBrowserRouter } from 'react-router-dom'
import Home from './Pages/home/home.jsx'
import SignUp from './Pages/signUp/signUp.jsx'
import SignIn from './Pages/signIn/signIn.jsx'
import Profile from './Pages/profile/profile.jsx'


const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: < Home/>,
    },
    {
      path: '/profile',
      element: < Profile/>,
    },
    {
      path: '/signUp',
      element: < SignUp/>,
    },
    {
      path: '/signIn',
      element: < SignIn/>,
    },
    
  ])
  return 
}

export default App