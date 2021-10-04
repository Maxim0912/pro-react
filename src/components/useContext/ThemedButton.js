import React from "react";
import { useContext } from "react";

import ThemeContext from "./Context";

function ThemedButton() {
    const theme = useContext(ThemeContext);
    return (
        <button
            style={{ background: theme.background, color: theme.foreground }}
        >
            Я стилизован темой из контекста!
        </button>
    );
}

export default ThemedButton;
