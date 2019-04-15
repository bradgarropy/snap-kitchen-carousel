import React, {useState} from "react"
import styled from "styled-components"
import Arrow from "./Arrow"
import FoodCard from "./FoodCard"
import foods from "../../data/food"

const SliderWrapper = styled.div`
    white-space: nowrap;
    width: 500px;
    position: relative;
    overflow: hidden;
`

const Arrows = styled.div`
    position: absolute;
    bottom: 0px;
    display: grid;
    grid-template-columns: repeat(2, auto);
    justify-items: center;
    z-index: 999;
    width: 100%;
`

const Slides = styled.div`
    transition: all 300ms ease;
    transform: translateX(${({translate}) => translate}px);
    width: 100%;
    height: 100%;
`

const Slide = styled.div`
    display: inline-block;
    width: 100%;
    height: 100%;
`

const Slider = () => {
    const [translate, setTranslate] = useState(0)

    const onLeftClick = () => {
        setTranslate(translate + 500)
        return
    }

    const onRightClick = () => {
        setTranslate(translate - 500)
        return
    }

    return (
        <SliderWrapper>
            <Arrows>
                <Arrow direction="left" onClick={onLeftClick}/>
                <Arrow direction="right" onClick={onRightClick}/>
            </Arrows>

            <Slides translate={translate}>
                {foods.map((food, index) => (
                    <Slide key={index}>
                        <FoodCard food={food}/>
                    </Slide>
                ))}
            </Slides>
        </SliderWrapper>
    )
}

export default Slider
