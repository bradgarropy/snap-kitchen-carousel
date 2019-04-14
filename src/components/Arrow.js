import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons"
import PropTypes from "prop-types"

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

    return <FontAwesomeIcon icon={icon} size="3x" {...props}/>
}

Arrow.propTypes = {
    direction: PropTypes.oneOf(["left", "right"]),
}

export default Arrow
