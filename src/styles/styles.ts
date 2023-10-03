import { createGlobalStyle } from "styled-components";

//#57F2E4
//#0067A3
//#5E77E6
//#875BFC
//#C957F2



export const StyleGlobal = createGlobalStyle`
    :root{
        --background: #0067a3
    }

    *{
        padding: 0;
        margin: 0;
    }
    body {
        background-color: var(--background);
    }

    border-style, input-security, textarea, button {
        font-family: Arial, Helvetica, sans-serif;
    }

    button {
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }

`