import { useContext } from "react"
import { ThemeContext } from "../context/themeContext"

export const AccessTheme = () => {
    const theme = useContext(ThemeContext).theme
    return(theme) 
}
