import React from 'react'
import {About, Contact, Footer, Header, Home} from './components'
import { Outlet } from 'react-router-dom'


const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App