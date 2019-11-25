'use strict'

module.exports = `
    {
        allWordpressPost {
            edges {
                node {
                    id
                    wordpress_id
                    title
                    slug
                    content
                    acf {
                        assunto
                    }
                    tags {
                        name
                        slug
                    }
                    categories {
                        slug
                        id
                        name
                        wordpress_id
                    }
                    author {
                        slug
                        name
                    }
                }
            }
        }
        allWordpressCategory {
            totalCount
            edges {
                node {
                    name
                    slug
                    wordpress_id
                    count
                }
            }
        }
        allWordpressPage {
            edges {
                node {
                    id
                    wordpress_id
                    title
                    acf {
                        pageCategory
                        menuName
                        menuIcon
                    }
                }
            }
        }
    }
`