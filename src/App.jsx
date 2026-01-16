import React from 'react'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'
import ModalForm from './Dashboard/ModalForm'

const App = () => {
  return (
    <div>
      <Navbar/>
      <ModalForm/>
      <Outlet/>
    </div>
  )
}

export default App
