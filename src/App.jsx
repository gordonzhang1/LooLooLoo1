import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home  from './pages/Home.jsx'
import Map from './pages/Map.jsx'

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </Router>
    </>
  )
}




