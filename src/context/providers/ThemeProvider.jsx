import { ThemeContext } from "../themeContext"
import { useStorage } from "../../hooks/useStorage"

export const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useStorage("theme","Ligth")


    const handdleTheme = (e) => {
        (e.target.checked) ? setTheme("Dark") 
        : setTheme("Ligth")
    }

    const data = {theme,handdleTheme}

  return (
    <ThemeContext.Provider value = {data}>{children}</ThemeContext.Provider>
  )
}
