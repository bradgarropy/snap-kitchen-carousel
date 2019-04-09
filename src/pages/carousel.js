import React from "react"
import "../styles/styles.css"

const Carousel = () => {
    const products = [
        {
            id: 1,
            photo:
                "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
            name: "Quinoa",
            calories: 400,
            price: 799,
            tags: ["grain", "vegan"],
        },
        {
            id: 2,
            photo:
                "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2",
            name: "Chicken",
            calories: 200,
            price: 899,
            tags: ["protein"],
        },
        {
            id: 3,
            photo:
                "https://images.unsplash.com/photo-1532980400857-e8d9d275d858",
            name: "Salad",
            calories: 100,
            price: 599,
            tags: ["vegan", "low calorie"],
        },
    ]

    const onLeftClick = event => {
        console.log("onClick LEFT")
        console.log(event)
    }

    const onRightClick = event => {
        console.log("onClick RIGHT")
        console.log(event)
    }

    return (
        <div className="App">
            <div className="carousel">
                <div className="controls">
                    <button onClick={onLeftClick}>LEFT</button>
                    <button onClick={onRightClick}>RIGHT</button>
                </div>
                {products.map(product => {
                    return (
                        <div id={product.id} key={product.id}>
                            <img
                                src={product.photo}
                                alt={product.name}
                                className="product-image"
                            />
                            <p>
                                {product.name} | {product.calories}
                            </p>
                            {product.tags.map((tag, index) => (
                                <p key={index}>{tag}</p>
                            ))}
                            <p>{product.price}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Carousel
