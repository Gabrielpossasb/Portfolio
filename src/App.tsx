import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import Help from './pages/Help'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sobre" element={<About />} />
          <Route path="curriculo" element={<Resume />} />
          <Route path="contato" element={<Contact />} />
          <Route path="ajuda" element={<Help />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
