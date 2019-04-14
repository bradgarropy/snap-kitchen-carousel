import React from "react"
import Arrow from "./Arrow"
import FoodCard from "./FoodCard"
import foods from "../data/food"

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
        <div>
            <Arrow direction="left" onClick={onLeftClick}/>
            <Arrow direction="right" onClick={onRightClick}/>

            {foods.map((food, index) => (
                <FoodCard key={index} food={food}/>
            ))}
        </div>
    )
}

export default Slider
