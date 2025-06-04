import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicial from './Pages/Inicial'
import Contato from './Pages/Contato'
import DpolLgpd from './Pages/DpolLgpd'
import Noticias from './Pages/Noticias'
import Faculdade from './Pages/Faculdade'

const App = () => {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicial />}/>
        <Route path="/contato" element={<Contato />}/>
        <Route path="/dpo-lgpd" element={< DpolLgpd />}/>
        <Route path="/noticias" element={<Noticias />}/>
        <Route path="/a-faculdade" element={<Faculdade />}/>
      </Routes>
   </BrowserRouter>
  )
}

export default App