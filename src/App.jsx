import { useState } from 'react'
import Home from './pages/Home'
import Skills from './pages/Skills'
import 'bootstrap/dist/css/bootstrap.min.css'
import './app.scss'

import { HashRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
