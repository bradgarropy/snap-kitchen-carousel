import React from "react"
import styled from "styled-components"

const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    background-image: linear-gradient(
        to right bottom,
        ${({theme}) => theme.colors.pink},
        ${({theme}) => theme.colors.hotPink}
    );
    color: ${({theme}) => theme.colors.white};
    padding: 1.5rem;
    box-shadow: 0 2px 6px rgba(86, 83, 83, 0.65);

    p {
        margin: 0;
    }
`

const Header = () => {
    return (
        <StyledHeader>
            <p>HEADER</p>
        </StyledHeader>
    )
}

export default Header
