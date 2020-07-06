import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Wrapper from './components/Wrapper/index'
import CustomHeader from './components/CustomHeader/index'
import Navbar from './components/Navbar/index'
import Body from './components/Body/index'
import Footer from './components/Footer/index'
import Projects from './pages/Projects'
import About from './pages/About'

function App () {
  return (
    <Wrapper>
      <Router basename='/20-react-portfolio'>
        <CustomHeader />
        <Navbar />
        <Body>
          <Route exact path='/' component={Projects} />
          <Route exact path='/about' component={About} />
        </Body>
        <Footer />
      </Router>
    </Wrapper>
  )
}

export default App
