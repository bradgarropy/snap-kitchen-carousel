const displayPrice = price => {
    const formattedPrice = "$" + parseFloat(price / 100).toFixed(2)
    return formattedPrice
}

export {displayPrice}
