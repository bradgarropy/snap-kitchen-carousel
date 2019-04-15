import React from "react"
import styled from "styled-components"
import BuiltBy from "./BuiltBy"

const StyledFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-image: linear-gradient(
        to right bottom,
        ${({theme}) => theme.colors.pink},
        ${({theme}) => theme.colors.hotPink}
    );
    color: ${({theme}) => theme.colors.black};
    padding: 1.5rem;

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
