import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home  from './pages/Home.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Map from './pages/Map.jsx'
import Login from './pages/Login.jsx'
import Waterlog from './pages/Waterlog.jsx'

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path= "/dashboard" element = {<Dashboard />} />
          <Route path="/map" element={<Map />} />
          <Route path="/waterlog" element={<Waterlog />} />

        </Routes>
      </Router>
    </>
  )
}