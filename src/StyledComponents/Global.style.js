import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}
body{
    background-color: ${props => props.theme.colors.primary}

}
h1{
    font-size: 2rem;
    color: ${props => props.theme.colors.light}
}
h2{
    fontsize: 1.5rem;
}

`