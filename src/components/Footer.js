import React from "react"
import styled from "styled-components"
import BuiltBy from "./BuiltBy"

const StyledFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${({theme}) => theme.colors.lightBlack};
    color: ${({theme}) => theme.colors.white};
    padding: 64px;

    p {
        margin: 0;
    }
`

const Footer = () => {
    return (
        <StyledFooter>
            <p>FOOTER</p>
            <BuiltBy/>
        </StyledFooter>
    )
}

export default Footer
