import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './routes/About'
import Blog from './routes/Blog'
import BlogDetail from './routes/BlogDetail'
// Using JS file for Success route to match existing file extension
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Success from './routes/Success.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogDetail />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  )
}

export default App
