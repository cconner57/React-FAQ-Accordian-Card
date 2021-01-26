import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Kumbh Sans', sans-serif;
    font-weight: 400;
}

html {
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    @media (min-width: 375px) {

    }
    @media (max-width: 1440px) {
        
    }
}`;

export default GlobalStyle;
