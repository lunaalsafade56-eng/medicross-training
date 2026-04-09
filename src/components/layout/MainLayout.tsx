

import NavBar from './NavBar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div>
      <NavBar/>
     <Outlet/>
      <Footer/>
    </div>
  )
}

export default MainLayout