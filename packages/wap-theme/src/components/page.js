// File: /packages/my-first-theme/src/components/page.js

import React from "react"
import { connect, styled} from "frontity"
import FeaturedMedia from "./featuredImage";
import HeroSection from "./heroSection";

const Page = ({ state }) => {
  const data = state.source.get(state.router.link)
  const page = state.source[data.type][data.id]
  const featuredId = page.featured_media
  const secImage = page.acf.secondary_image.sizes.medium_large

  return (
    <>
      <HeroSection id={featuredId} />
      <div  className="container">
        <div className="section cols">
            <div className="col8" dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
            <div className="col4 sectionImage">
                <Image alt={secImage.title} src={secImage} />
            </div>
        </div>
      </div>
    </>
  )
}

export default connect(Page)

const Image = styled.img`
  height: 300px;
  width: 100%;
  object-fit: contain;
`;