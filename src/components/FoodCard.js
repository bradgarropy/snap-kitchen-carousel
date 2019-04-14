import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {displayPrice} from "../utils/price"

const FoodCardWrapper = styled.div`
    border: 3px solid black;
    color: ${({theme}) => theme.colors.charcoal};
`

const FoodName = styled.span`
    font-size: 20px;
    font-weight: 800;
`

const FoodCalories = styled.span`
    font-size: 16px;
`

const FoodTags = styled.p`
    font-size: 14px;
`

const FoodPrice = styled.p`
    border-radius: 5px;
    padding: 7px;
    border: 2px solid ${({theme}) => theme.colors.charcoal};
`

const FoodCard = ({food}) => {
    const tags = food.tags.join(", ")

    return (
        <FoodCardWrapper>
            <img src={food.photo} alt={food.name}/>

            <p>
                <FoodName>{food.name}</FoodName>
                <span> | </span>
                <FoodCalories>{food.calories}</FoodCalories>
            </p>

            <FoodTags>{tags}</FoodTags>
            <FoodPrice>{displayPrice(food.price)}</FoodPrice>
        </FoodCardWrapper>
    )
}

FoodCard.propTypes = {
    food: PropTypes.object.isRequired,
}

export default FoodCard