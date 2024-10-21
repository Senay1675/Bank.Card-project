import React from "react";
import { useState } from "react";


const Settings = () => {
    const [theme, setTheme] = useState();
    

    const handleMode = (e) => {
        const selectedTheme = e.target.value;
        setTheme(selectedTheme);
        document.body.className = selectedTheme; 
    }


    return(
        <>
        <h1>Settings</h1>
        <select onChange={handleMode} value={theme}>
        <option value="dark">Darkmode</option>
        <option value="light">LightMode</option>
        </select>
        <button>Save changes</button>
        </>
    )
}

export default Settings