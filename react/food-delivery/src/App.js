import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
// import Clock from './components/Clock'
import About from './pages/About'
import Home from './pages/Home'
import Restaurant from './pages/Restaurant'
import Restaurants from './pages/Restaurants'

function App () {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='restaurants' element={<Restaurants />} />
        <Route path='restaurant/:id' element={<Restaurant />} />
      </Routes>
    </div>
  )
}

export default App
