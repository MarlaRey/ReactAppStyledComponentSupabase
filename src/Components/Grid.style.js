import styled from "styled-components";

export const GridContainer = styled.div`
display: grid;
height: 100vh;
grid-template-columns: ${props => props.theme.grid.mobile.columns};
grid-template-rows: ${props => props.theme.grid.mobile.rows};
grid-template-areas: ${props => props.theme.grid.mobile.areas};

@media screen and (min-width: ${(props) => props.theme.grid.breakpoints.m}){
grid-template-columns: ${(props) => props.theme.grid.tablet.columns};
grid-template-rows: ${(props) => props.theme.grid.tablet.rows};
grid-template-areas: ${(props) => props.theme.grid.tablet.areas};
}

@media screen and (min-width: ${(props) => props.theme.grid.breakpoints.l}){
    grid-template-columns: ${(props) => props.theme.grid.desktop.columns};
    grid-template-rows: ${(props) => props.theme.grid.desktop.rows};
    grid-template-areas: ${(props) => props.theme.grid.desktop.areas};
    }
`