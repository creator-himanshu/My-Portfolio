import { useState } from 'react'
import Home from './pages/Home'
import Skills from './pages/Skills'
import 'bootstrap/dist/css/bootstrap.min.css'
import './app.scss'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
