import { createGlobalStyle } from "styled-components";
import { Reset } from "./Mixins.style";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}
body{
    background-color: ${props => props.theme.colors.primary}
    ${Reset};

}
h1{
    font-size: 2rem;
    color: ${props => props.theme.colors.secondary};
    font-family: ${props => props.theme.fonts[0]}, sans-serif;
}
h2{
    fontsize: 1.5rem;
}

`