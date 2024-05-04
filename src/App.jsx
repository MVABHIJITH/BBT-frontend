import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Landing from './pages/Landing'
import Home from './pages/Home'
import Cars from './pages/Cars'
import TestDrive from './pages/TestDrive'
import BookCar from './pages/BookCar'
import Admin from './pages/Admin'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/register' element={<Landing insideRegister />} />
        <Route path='/home' element={<Home />} />
        <Route path='/cars' element={<Cars />} />
        <Route path='/booking' element={<BookCar />} />
        <Route path='/testdrive' element={<TestDrive />} />
        <Route path='/admindashbord' element={<Admin />} />
      </Routes>
    </>
  )
}

export default App
