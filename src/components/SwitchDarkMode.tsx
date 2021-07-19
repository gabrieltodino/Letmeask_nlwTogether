import { useState } from 'react'
import Switch from 'react-switch'

import Cookies from 'js-cookie'

export function SwitchDarkMode () {
    const schemeCookieVar = Cookies.get('SchemeCookie')

    const [scheme, setScheme] = useState(!schemeCookieVar ? "lightScheme" : schemeCookieVar)
    
    if(scheme === "darkScheme") {
        document.body.classList.add("darkMode")
    }

    function toggleColorScheme() {
        if(scheme === "darkScheme") {
            document.body.classList.remove("darkMode")
            setScheme("lightScheme")
            Cookies.set('SchemeCookie', 'lightScheme')
        } else if(scheme === "lightScheme") {
            document.body.classList.add("darkMode")
            setScheme("darkScheme")
            Cookies.set('SchemeCookie', 'darkScheme')
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
            className={"switchComponent"}
        />
    )
}