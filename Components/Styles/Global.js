import { createGlobalStyle } from "styled-components";

export const StyledGlobal = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

    * {
        box-sizing: border-box;
    }

    body {
        background-color: rgb(20, 20, 20);
        font-family: 'Inter', sans-serif;
        width: 100%;
        max-width: 100%;
        margin: 0px;
        padding: 0px;
    }
`;

export const DarkTheme = {
    body: 'rgb(20, 20, 20)',
}

export const LightTheme = {
    body: 'rgb(240, 240, 240)',
}