import React from "react"
import Helmet from "react-helmet"
import favicon from "../../static/images/favicon.ico"

const Meta = () => {
    return (
        <Helmet>
            <html lang="en"/>

            <title>Snap Kitchen Slider</title>

            <meta
                name="description"
                content="⏩ snap kitchen interview question - slider"
            />
            <meta
                name="keywords"
                content="gatsby, react, styled-components, eslint, snap-kitchen, interview, slider"
            />

            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:site" content="@bradgarropy"/>
            <meta name="twitter:creator" content="@bradgarropy"/>
            <meta name="twitter:title" content="Snap Kitchen Slider"/>
            <meta
                name="twitter:description"
                content="⏩ snap kitchen interview question - slider"
            />
            <meta
                name="twitter:image"
                content="https://res.cloudinary.com/bradgarropy/image/upload/q_auto,f_auto,ar_2:1,c_mpad,w_1800,b_white/gatsby-starter/gatsby-starter.png"
            />

            <meta
                property="og:url"
                content="https://snap-kitchen-slider.netlify.com/"
            />
            <meta property="og:type" content="website"/>
            <meta property="og:title" content="Snap Kitchen Slider"/>
            <meta
                property="og:description"
                content="⏩ snap kitchen interview question - slider"
            />
            <meta
                property="og:image"
                content="https://res.cloudinary.com/bradgarropy/image/upload/q_auto,f_auto,ar_2:1,c_mpad,w_1800,b_white/gatsby-starter/gatsby-starter.png"
            />

            <link rel="icon" type="image/png" href={favicon}/>
        </Helmet>
    )
}

export default Meta
