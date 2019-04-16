require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    plugins: [
        {
            resolve: "gatsby-plugin-react-helmet",
        },
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "gatsby starter",
                short_name: "gatsby starter",
                start_url: "/",
                background_color: "#ffffff",
                theme_color: "#ffffff",
                display: "minimal-ui",
                icon: "static/images/snap-kitchen.png",
            },
        },
        {
            resolve: "gatsby-plugin-offline",
        },
        {
            resolve: "gatsby-plugin-google-analytics",
            options: {
                trackingId: process.env.TRACKING_ID,
                head: true,
                anonymize: true,
                respectDNT: false,
            },
        },
        {
            resolve: "gatsby-plugin-styled-components",
        },
    ],
}
