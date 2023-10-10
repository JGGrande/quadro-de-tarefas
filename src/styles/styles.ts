import { createGlobalStyle } from "styled-components";

//#57F2E4
//#0067A3
//#5E77E6
//#875BFC
//#C957F2



export const StyleGlobal = createGlobalStyle`
    :root{
				--ciano: #57F2E4;
        --background: #0067a3;
				--blue: #2596be;
				--white-blue: #5E77E6;
				--roxo: #875BFC;
				--rosa: #C957F2;
				--background-modal: #f0f2f5;
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
		.react-modal-overlay{
        background: rgba(0,0,0,0.5);

        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }
    .react-modal-content{
        max-width:100%;
        max-width: 576px;
        background: var(--background-modal);
        padding: 3rem;
        position: relative;
        border-radius: 0.24rem;
    }
    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;
        transition: filter 0.2s;
        &:hover {
            filter: brightness(0.8);
        }
    }


`