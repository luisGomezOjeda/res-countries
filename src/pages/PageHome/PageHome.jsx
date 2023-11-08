import { ListCountries } from "../../components/ListCountries/ListCountries"
import { SectionSerch } from "../../components/SectionSerch/SectionSerch"
import { StyledHome } from "./StyledHome"



export const PageHome = () => {
  return (
    <StyledHome>
      <SectionSerch/>
      <ListCountries/>
    </StyledHome>
  )
}
