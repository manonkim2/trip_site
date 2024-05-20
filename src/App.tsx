import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HotelListPage from '@pages/HotelList'
import TestPage from '@pages/Test'
import HotelPage from './pages/Hotel'
import useLoadKakao from './hooks/useLoadKakao'

function App() {
  useLoadKakao()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HotelListPage />}></Route>
        <Route path="/test" element={<TestPage />}></Route>
        <Route path="/hotel/:id" element={<HotelPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
