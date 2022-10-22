import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Company from './pages/Company/Company'
import Contact from './pages/Contact/Contact'
import NewProject from './pages/NewProject/NewProject'
import Container from './components/layouts/Container'
import Projects from './pages/Projects/Projects'
import Navbar from './components/layouts/Navbar/Navbar'
import Footer from './components/layouts/Footer/Footer'

function App() {

  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/company' element ={<Company/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/newproject' element={<NewProject/>}></Route>
          <Route path='/projects' element={<Projects/>}></Route>
        </Routes>
      </Container>
      <Footer/>
    </Router>
  )
}

export default App
