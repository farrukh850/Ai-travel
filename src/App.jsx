import { Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import Discover from './pages/Discover'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
      </Route>
    </Routes>
  )
}

export default App
