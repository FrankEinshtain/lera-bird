import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { options, keyframes } from "../lib/animation"

const Viewer = () => {
  const handleClick = () => {
    const element = document.querySelector(".the-image-wrapper")
    element.animate(keyframes, options)
  }

  return (
    <div className="viewer">
      <div className="viewer-window">
        <StaticImage
          onClick={handleClick}
          src="../images/the-image.jpg"
          loading="eager"
          placeholder="tracedSVG"
          className="the-image-wrapper"
          imgClassName="the-image"
          objectFit="NONE"
          layout="fixed"
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
          style={{
            marginBottom: `1.45rem`,
            transform: `translateX(0) translateY(0) scaleY(0.20) scaleX(0.20)`,
            transformOrigin: "top left",
          }}
        />
      </div>
    </div>
  )
}

export default Viewer
