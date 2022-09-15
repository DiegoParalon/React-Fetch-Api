import React, { useState } from "react"

import Albuns from "./pages/Albuns"
import Counter from "./pages/Counter"
import Users from "./pages/Users"
import Photos from "./pages/Photos"


const defaultPage = 'albuns'

const pages = {

  albuns: {
    text: 'Albuns',
    component: Albuns,
  },

  counter: {
    text: 'Contador',
    component: Counter,
  },

  users: {
    text: 'Usuarios',
    component: Users,
  },

  photos: {
    text: 'Fotos',
    component: Photos,
  }
}



function App() {
  const [page, setPage] = useState(defaultPage)

  const handleChangePage = page => {
    setPage(page)
  }

  const Page = pages[page].component

  const pageNames = Object.keys(pages)

  
  return (
    <>
    
    {
      pageNames.map(page =>  <button onClick={ () => handleChangePage(page)}>{pages[page].text}</button>)
    }
   
    
    {Page && < Page />}
    
    </>
  )
}

export default App
