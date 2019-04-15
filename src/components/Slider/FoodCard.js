import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {displayPrice} from "../../utils/price"

const FoodCardWrapper = styled.div`
    color: ${({theme}) => theme.colors.charcoal};
    display: grid;
    justify-items: center;
    justify-content: center;
`

const FoodPhoto = styled.img`
    width: 100%;
`

const FoodDescription = styled.p`
    margin: 0 0 5px 0;
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
    margin: 0 0 15px 0;
`

const FoodPrice = styled.p`
    display: grid;
    align-content: center;
    border-radius: 5px;
    padding: 7px;
    margin: 0;
    width: 92px;
    height: 24px;
    text-align: center;
    border: 2px solid ${({theme}) => theme.colors.charcoal};
`

const FoodCard = ({food}) => {
    const tags = food.tags.join(", ")

    return (
        <FoodCardWrapper>
            <FoodPhoto src={food.photo} alt={food.name}/>

            <FoodDescription>
                <FoodName>{food.name}</FoodName>
                <span> | </span>
                <FoodCalories>{food.calories} cal</FoodCalories>
            </FoodDescription>

            <FoodTags>{tags}</FoodTags>
            <FoodPrice>{displayPrice(food.price)}</FoodPrice>
        </FoodCardWrapper>
    )
}

FoodCard.propTypes = {
    food: PropTypes.object.isRequired,
}

export default FoodCard
