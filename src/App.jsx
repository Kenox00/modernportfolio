import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import SingleBlog from './pages/blogs/SingleBlog'
import SinglePortfolio from './pages/portfolios/SinglePortfolio'
import Services from './pages/service/Services'
import SingleService from './pages/service/SingleService'
import Blogs from './pages/blogs/Blogs'
import Portfolios from './pages/portfolios/Portfolios'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
        <Route path="/portfolio" element={<Portfolios />} />
        <Route path="/portfolio/:id" element={<SinglePortfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<SingleService />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App