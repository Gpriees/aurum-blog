import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Card from "../components/card"
import SEO from "../components/seo"


const PageTemplate = ({ data, pageContext }) => {
  const posts = data.allWordpressPost

  return (
    <Layout>
      <SEO title={pageContext.title} />
      <section class="container">

        {posts.edges.map(({ node }, index) => (
          <Card post={node} key={index}></Card>
        ))}

      </section>
    </Layout>
  )
}

export default PageTemplate

export const query = graphql`
  query pagePostsQuery ($category: String) {
    allWordpressPost(filter: {categories: {elemMatch: {slug: {glob: $category}}}}) {
      edges {
        node {
          id
          wordpress_id
          title
          slug
          acf {
            assunto
            showMoreIcon
            showMoreText
          }
          categories {
            slug
            name
          }
          featured_media {
            localFile {
              childImageSharp {
                fluid(quality: 60) {
                  src
                  originalName
                }
              }
            }
          }
        }
      }
    }
  }
`