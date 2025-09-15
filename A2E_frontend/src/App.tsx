import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Blog from './routes/Blog'
import BlogDetail from './routes/BlogDetail'
import Admin from './routes/Admin'
import About from './routes/About'
import Success from './routes/Success'
import Programs from './routes/Programs'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogDetail />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/about" element={<About />} />
      <Route path="/success" element={<Success />} />
      <Route path="/programs" element={<Programs />} />
    </Routes>
  )
}

export default App
