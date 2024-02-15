import { useState } from 'react'
import './App.scss'
import { Container } from './StyledComponents/Container.style'
import { Header } from './Components/Header'
import { Main } from './Components/Main'
import { Footer} from './Components/Footer'
import { NavBar } from './Components/NavBar'
import { Grid } from './Components/Grid'

function App() {

  return (
    <>
      <Container maxwidth= "1200">
        <Grid>
        <Header area="header"/>
        <NavBar area= "navbar"/>
        <Main area="main"/>
        <Footer area= "footer"/>
        </Grid>
      </Container>
      
    </>
  )
}

export default App
