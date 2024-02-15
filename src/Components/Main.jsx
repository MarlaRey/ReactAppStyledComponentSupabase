import React from "react";
import { MainContainer } from "./Main.style";

export const Main = ({children}) => {
    return (
        <MainContainer>
        {children}
        </MainContainer>
    )
}