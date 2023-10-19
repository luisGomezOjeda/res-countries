import { useState } from "react"
import LanContext from "../lanContext"
import { useStorage } from "../../hooks/useStorage"

export const LanProvider = ({children}) => {

    const [lan, setLan] = useStorage("lan","es")

    const handdleLan = (e) => {
        setLan(e.target.value)
        console.log(e.target.value)
    }

    const data = {lan,handdleLan}

  return (
    <LanContext.Provider value = {data}>{children}</LanContext.Provider>
  )
}
