import { useState } from 'react'
import Switch from 'react-switch'

export function SwitchDarkMode () {
    const [scheme, setScheme] = useState("darkScheme")

    function toggleColorScheme() {
        if(scheme === "darkScheme") {
            document.body.classList.remove("darkMode")
            setScheme("lightScheme")
        } else if(scheme === "lightScheme") {
            document.body.classList.add("darkMode")
            setScheme("darkScheme")
        }
    }
    
    return (
        <Switch
            onChange={toggleColorScheme}
            checked={scheme === "darkScheme" ? true : false}
            checkedIcon={false}
            uncheckedIcon={false}
            offColor={"#5965e0"}
            onColor={"#61bfe8"}
        />
    )
}