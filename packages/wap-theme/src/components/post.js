// File: /packages/my-first-theme/src/components/post.js

import React from "react"
import { connect } from "frontity"
import dayjs from "dayjs"

const Post = ({ state }) => {  
    const data = state.source.get(state.router.link)
    const post = state.source[data.type][data.id]
    const author = state.source.author[post.author]
    const formattedDate = dayjs(post.date).format("DD MMMM YYYY")
    return (
        <div>
        <h1>{post.title.rendered}</h1> 
        <p>
            <strong>Posted: </strong>
            {formattedDate}
        </p>
        <p>
            <strong>Author: </strong>
            {author.name}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
    )
}

export default connect(Post)