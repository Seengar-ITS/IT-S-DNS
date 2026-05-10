import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Domains from './pages/Domains'
import Records from './pages/Records'
import Add from './pages/Add'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/domains" element={<Domains />} />
          <Route path="/records" element={<Records />} />
          <Route path="/add" element={<Add />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}