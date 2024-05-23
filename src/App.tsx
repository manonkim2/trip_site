import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Navbar from './components/shared/Navbar'
import AuthGuard from './components/auth/AuthGuard'
import PrivateRoute from './components/auth/PrivateRoute'
import useLoadKakao from './hooks/useLoadKakao'

const TestPage = lazy(() => import('@pages/Test'))
const HotelListPage = lazy(() => import('@pages/HotelList'))
const HotelPage = lazy(() => import('@pages/Hotel'))
const Mypage = lazy(() => import('@pages/My'))
const SigninPage = lazy(() => import('@pages/Signin'))
const SettingsPage = lazy(() => import('@/pages/setting'))
const LikePage = lazy(() => import('@/pages/setting/like'))

function App() {
  useLoadKakao()

  return (
    <Suspense fallback={<></>}>
      <BrowserRouter>
        <AuthGuard>
          <Navbar />
          <Routes>
            <Route path="/" element={<HotelListPage />}></Route>
            <Route path="/test" element={<TestPage />}></Route>
            <Route
              path="/mypage"
              element={
                <PrivateRoute>
                  <Mypage />
                </PrivateRoute>
              }
            ></Route>
            <Route path="/signin" element={<SigninPage />}></Route>
            <Route path="/hotel/:id" element={<HotelPage />}></Route>
            <Route
              path="/settings"
              element={
                <PrivateRoute>
                  <SettingsPage />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/settings/like"
              element={
                <PrivateRoute>
                  <LikePage />
                </PrivateRoute>
              }
            />
          </Routes>
        </AuthGuard>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
