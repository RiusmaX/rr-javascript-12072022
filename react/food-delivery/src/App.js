import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import { checkAuth } from './helpers/tokenHelpers'
// import Clock from './components/Clock'
import About from './pages/About'
import Home from './pages/Home'
import Login from './pages/Login'
import Restaurant from './pages/Restaurant'
import Restaurants from './pages/Restaurants'

function App () {
  const [isLoggedIn, setIsLoggedIn] = useState(checkAuth())

  useEffect(() => {
    window.addEventListener('storage', () => {
      console.log('STORAGE UPDATED')
      setIsLoggedIn(checkAuth())
    })
  }, [])

  if (!isLoggedIn) {
    return (
      <div className='App'>
        <Routes>
          <Route index path='/login' element={<Login />} />
          <Route path='*' element={<Navigate to='login' replace />} />
        </Routes>
      </div>
    )
  }

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='restaurants' element={<Restaurants />} />
        <Route path='restaurant/:id' element={<Restaurant />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </div>
  )
}

export default App
