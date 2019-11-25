import React from "react"
import { graphql } from "gatsby"

const PostTemplate = (props) => {
    const post = props.data.wordpressPost

    return (
      <div>
        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    )
}

export default PostTemplate

export const pageQuery = graphql`
  query currentPostQuery($postId: String) {
    wordpressPost(id: { eq: $postId }) {
      title
      content
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
