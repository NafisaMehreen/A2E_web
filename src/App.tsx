import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './routes/About'
import Blog from './routes/Blog'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  )
}

export default App
