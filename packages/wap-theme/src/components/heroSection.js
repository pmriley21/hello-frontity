// heroSection.js

import React from "react";
import { connect, Global, css } from "frontity";

const HeroSection = ({ state, id }) => {
    const data = state.source.get(state.router.link)
    const page = state.source[data.type][data.id]
    const subheading = page.acf.hero_subheading
    const media = state.source.attachment[id];  
  
    if (!media) return null;
  
    const imgUrl = media.source_url;
  
    return (
        <>
        <Global styles={css`
        .hero {
            background-image:url(${imgUrl});
            display:flex;
            flex-direction:column;
            min-height:300px;
            height:20vh;
            justify-content:center;
            align-items:center;
        }
        .hero h1 {
            font-size:2.5rem;
            line-height:2;
        }
        .hero h2 {
            font-size:1.5rem;
        }
        .hero h1,
        .hero h2 {
            color:white;
            text-shadow:0 0 1rem rgba(0,0,0,0.4);
        }`} />
        <div className="hero">
            <h1>{page.title.rendered}</h1>
            <h2>{subheading}</h2>
        </div>
        </>
    );
  };
  
  export default connect(HeroSection);