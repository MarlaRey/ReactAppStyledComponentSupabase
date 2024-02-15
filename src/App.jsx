import { useState } from 'react'
import './App.scss'
import { Container } from './StyledComponents/Container.style'
import { Header } from './Components/Header'
import { Main } from './Components/Main'
import { Footer} from './Components/Footer'
import { NavBar } from './Components/NavBar'

function App() {

  return (
    <>
      <Container maxwidth="1024">
        <Header/>
        <NavBar/>
        <Main/>
        <Footer/>
      </Container>
      
    </>
  )
}

export default App
