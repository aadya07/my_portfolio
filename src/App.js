import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Layout from './components/Layouts'
import './App.scss'
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experience" element={<Experience />} />
        </Route>
      </Routes>
    </>
  )
}

export default App