import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context";

function ThemeSwitcher() {
    const {theme, setTheme} = useContext(ThemeContext )

    const switchTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return (
        <button type="button" class="btn btn-outline-info" onClick={switchTheme}>Temayı Değiştirin !!!</button>
    )
    
}

export default ThemeSwitcher