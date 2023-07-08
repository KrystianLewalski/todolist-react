import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::before, ::after {
        box-sizing: inherit;
    }

    body {
        box-sizing: border-box;
        max-width: 1000px;
        margin: 0 auto;
        font-family: 'Open Sans', sans-serif;
        word-break: break-word;
        background-color: hsl(0, 0%, 93%);
    }
`;