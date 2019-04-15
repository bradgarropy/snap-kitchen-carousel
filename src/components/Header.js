import React from "react"
import styled from "styled-components"
import SnapKitchen from "./SnapKitchen"

const StyledHeader = styled.div`
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    justify-content: start;
    column-gap: 10px;
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
            <a href="http://snapkitchen.com">
                <SnapKitchen/>
            </a>
            <p>Slider</p>
        </StyledHeader>
    )
}

export default Header
