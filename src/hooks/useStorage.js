import { useState } from "react"


export const useStorage = ( key , initialValue) => {

    const l = localStorage
    const storedValue = l.getItem(key)

    let initial = storedValue ? storedValue : initialValue

    if(!storedValue) l.setItem(key, initial)

    const [value, setvalue] = useState(initial)

    const updateValue = (newValue) => {
        setvalue(newValue)
        l.setItem(key, newValue)
    }


    return [ value, updateValue ]
}
