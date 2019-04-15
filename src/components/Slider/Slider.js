import React from "react"
import styled from "styled-components"
import Arrow from "./Arrow"
import FoodCard from "./FoodCard"
import foods from "../../data/food"

const SliderWrapper = styled.div`
    border: 3px solid black;
`

const ArrowWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    justify-items: center;
`

const Slider = () => {
    const onLeftClick = event => {
        console.log("onClick LEFT")
        console.log(event)
    }

    const onRightClick = event => {
        console.log("onClick RIGHT")
        console.log(event)
    }

    return (
        <SliderWrapper>
            <ArrowWrapper>
                <Arrow direction="left" onClick={onLeftClick}/>
                <Arrow direction="right" onClick={onRightClick}/>
            </ArrowWrapper>

            {foods.map((food, index) => (
                <FoodCard key={index} food={food}/>
            ))}
        </SliderWrapper>
    )
}

export default Slider
