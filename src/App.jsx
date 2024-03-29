import { Header } from "./components/header/Header"
import { ThemeProvider } from "./context/providers/ThemeProvider"
import { LanProvider } from "./context/providers/LanProvider"
import { StyledMain } from "./styles"
import  {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { CountriesProvider } from "./context/providers/CountriesProvider"
import { PageHome } from "./pages/PageHome/PageHome"
import { PageCountry } from "./pages/PageCountry/PageCountry"
import { Footer } from "./components/footer/Footer"
import { useState } from "react"


function App() {

  const [buttonPrevPwa, setButtonPrevPwa] = useState(false)

  return (
    <>
       <ThemeProvider>
         <LanProvider>
           <CountriesProvider>
               <Router>
                   <StyledMain>
                     <Header setButtonPrevPwa = {setButtonPrevPwa}/>
                     <Routes>
                       <Route path = "*" element ={<PageHome/>}/>
                       <Route path = "/res-countries/" element ={<PageHome/>}/>
                       <Route path = "/res-countries/:code" element ={<PageCountry buttonPrevPwa = { buttonPrevPwa }/>}/>
                     </Routes>
                     <Footer/>
                   </StyledMain>
               </Router>
           </CountriesProvider>
           </LanProvider>
       </ThemeProvider>
    </>
  )
}

export default App
