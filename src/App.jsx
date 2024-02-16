import './App.scss'
import { Container } from './StyledComponents/Container.style'
import { Header } from './Components/Header'
import { Main } from './Components/Main'
import { Footer} from './Components/Footer'
import { NavBar } from './Components/NavBar'
import { Grid } from './Components/Grid'
import { AppRouter } from './Components/AppRouter/AppRouter'

function App() {

  return (
    <>
      <Container $maxwidth= "1200">
        <Grid>
        <Header />
        <NavBar />
        <Main>
          <AppRouter/>
        </Main>
        <Footer/>
        </Grid>
      </Container>
      
    </>
  )
}

export default App
