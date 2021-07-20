import React from 'react'
import _styles from './App.module.css'
import './App.css'
import Home from './pages/home'
import Container from './components/Container'
import NavBar from './components/NavBar'

const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <NavBar />
      <Container padding="0px">
        <Home />
      </Container>
    </div>
  )
}

export default App
