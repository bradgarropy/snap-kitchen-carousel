import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons"

const StyledArrow = styled.div`
    cursor: pointer;
`

const Arrow = ({direction, ...props}) => {
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
        <StyledArrow>
            <FontAwesomeIcon icon={icon} size="3x" {...props}/>
        </StyledArrow>
    )
}

Arrow.propTypes = {
    direction: PropTypes.oneOf(["left", "right"]),
}

export default Arrow
