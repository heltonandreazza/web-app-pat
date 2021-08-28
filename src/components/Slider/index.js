import { graphql, useStaticQuery } from 'gatsby'
import BackgroundSlider from 'gatsby-image-background-slider'
import React from 'react'

const Slider = ({ children }) => (
  <>
    <main>{children}</main>
    <BackgroundSlider
      query={useStaticQuery(graphql`
        query {
          backgrounds: allFile(
            filter: { sourceInstanceName: { eq: "backgrounds" } }
          ) {
            nodes {
              relativePath
              childImageSharp {
                fluid(maxWidth: 4000, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      `)}
      initDelay={3} // delay before the first transition (if left at 0, the first image will be skipped initially)
      images={['banner.jpeg', 'banner2.jpeg', 'banner3.jpeg']}
      style={{
        zIndex: 1,
      }}
    />
  </>
)

export default Slider
