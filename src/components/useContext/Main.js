import React from "react";
import Toolbar from "./Toolbar";

import ThemeContext from "./Context";

function Main() {
    return (
        <ThemeContext.Provider value="light">
            <Toolbar />
        </ThemeContext.Provider>
    );
}

export default Main;
