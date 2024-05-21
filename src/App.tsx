import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HotelListPage from '@pages/HotelList'
import TestPage from '@pages/Test'
import HotelPage from './pages/Hotel'
import useLoadKakao from './hooks/useLoadKakao'
import Mypage from './pages/My'
import SigninPage from './pages/Signin'
import AuthGuard from './components/auth/AuthGuard'
import Navbar from './components/shared/Navbar'

function App() {
  useLoadKakao()

  return (
    <BrowserRouter>
      <AuthGuard>
        <Navbar />
        <Routes>
          <Route path="/" element={<HotelListPage />}></Route>
          <Route path="/test" element={<TestPage />}></Route>
          <Route path="/mypage" element={<Mypage />}></Route>
          <Route path="/signin" element={<SigninPage />}></Route>
          <Route path="/hotel/:id" element={<HotelPage />}></Route>
        </Routes>
      </AuthGuard>
    </BrowserRouter>
  )
}

export default App
