import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import Paginator from './components/paginator'
import './css/App.css'

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={
          <div className="App">
          hola
          <div className="contact-icons">
            <a
              href="https://www.linkedin.com/in/camilo-andres-moreno-roa-9981ba169/"
              target="_black"
            >
              <i className="bx bxl-linkedin-square"></i>
            </a>
            <a href="https://www.instagram.com/taurodev/" target="_blanck">
              <i className="bx bxl-instagram-alt"></i>
            </a>
            <a href="https://github.com/Camilo1423" target="_blanck">
              <i className="bx bxl-github"></i>
            </a>
          </div>
        </div>
        } 
        
        />
      </Routes>
    </div>
    
  )
}

export default App
