import React, { Component } from "react"

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost
    const resolutions = post.featured_media
      ? post.featured_media.localFile.childImageSharp.resolutions
      : null

    console.log(resolutions)


    return (
      <div>
        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />

        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
  query currentPostQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
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
