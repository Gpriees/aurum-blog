const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)
const queryAll = require(`./src/queries/queryAll.js`)

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {

    // Templates
    const postTemplate = path.resolve("./src/pages/post.js")
    const pageTemplate = path.resolve("./src/pages/page.js")

    resolve(
      graphql(queryAll).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        const posts = result.data.allWordpressPost.edges
        const categories = result.data.allWordpressPage.edges

        posts.forEach(edge => {       
          createPage({
            path: `/${edge.node.categories[0].slug}/${edge.node.slug}`,
            component: slash(postTemplate),
            context: {
              postId: edge.node.id,
              slug: edge.node.slug,
            },
          })
        })

        categories.forEach(edge => {
          createPage({
            path: `/${edge.node.acf.pageCategory}`,
            component: slash(pageTemplate),
            context: {
              title: edge.node.title,
              category: edge.node.acf.pageCategory || "*",
            },
          })
        })
      })
    )
  })
}
