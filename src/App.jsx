import React from "react";
import HomeScreen from "./containers-screens/home-screen/home-screen.view.jsx";
import styled, { ThemeProvider } from "styled-components";

// import global styles
import GlobalStyles from './assets/styles/main';

// import standart theme
import { baseTheme } from "./assets/styles/utils/baseTheme";

const Wrapper = styled.div`
    width                   : 77vw;
    margin                  : 0 auto;

    @media screen and (max-width: $smDesktopWidth) {
        width               : 90vw;
    }
`;

const App = () => {
    return (
        <ThemeProvider theme={baseTheme}>
            <Wrapper>
                <GlobalStyles />
                <HomeScreen />
            </Wrapper>
        </ThemeProvider>
    );
}

export default App;