import { useEffect } from "react"
import { ListCountries } from "../../components/ListCountries/ListCountries"
import { SectionSerch } from "../../components/SectionSerch/SectionSerch"
import { StyledHome } from "./StyledHome"



export const PageHome = () => {

  useEffect(() => {
  },[])
  window.addEventListener("beforeinstallprompt", (e) => {
    
  })

  return (
    <StyledHome>
      <SectionSerch/>
      <ListCountries/>
    </StyledHome>
  )
}
