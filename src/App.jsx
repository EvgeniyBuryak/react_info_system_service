import React from "react";
import HomeScreen from "./containers-screens/home-screen/home-screen.view.jsx";
import styled, { ThemeProvider } from "styled-components";

// import global styles
import GlobalStyles from './assets/styles/main';

// import standart theme
import { baseTheme } from "./assets/styles/utils/baseTheme";

// const Wrapper = styled.div`
//     width                   : 77vw;
//     margin                  : 0 auto;
// `;

const App = () => {
    return (
        <ThemeProvider theme={baseTheme}>            
            <GlobalStyles />
            <HomeScreen />            
        </ThemeProvider>
    );
}

export default App;