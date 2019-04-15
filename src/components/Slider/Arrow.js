import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons"

const StyledArrow = styled.div`
    padding: 0 20px 0 20px;
    cursor: ${({disabled}) => (disabled ? "arrow" : "pointer")};
    color: ${({disabled, theme}) =>
        disabled ? theme.colors.grey : theme.colors.charcoal};
`

const Arrow = ({direction, disabled = false, ...props}) => {
    let icon

    switch (direction) {
        case "left":
            icon = faAngleLeft
            break
        case "right":
            icon = faAngleRight
            break
    }

    return (
        <StyledArrow disabled={disabled}>
            <FontAwesomeIcon icon={icon} size="3x" {...props}/>
        </StyledArrow>
    )
}

Arrow.propTypes = {
    direction: PropTypes.oneOf(["left", "right"]).isRequired,
    disabled: PropTypes.bool,
}

export default Arrow
