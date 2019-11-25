import { Link } from "gatsby"
import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
    query categoriesQuery {
      allWordpressPage(sort: {order: ASC, fields: wordpress_id}) {
        totalCount
        edges {
          node {
            wordpress_id
            acf {
              pageCategory
              menuName
              menuIcon
            }
          }
        }
      }
    }
  `)

  const categories = data.allWordpressPage.edges
  const [statefulCategories, setCategory] = useState(data.allWordpressPage.edges);

  const toggleCategory = (id) => {
    setCategory(statefulCategories.map(category => {
      category.node.active = category.node.wordpress_id === id
      return category
    }))
  }

  return (
    <header>
      <h1>Aurum</h1>
      <nav>
        <ul>
          {categories.map(({ node }, index) => (
              <li key={index}>
                <Link 
                  to={`/${node.acf.pageCategory}`}
                  className={node.active ? 'isActive' : ''}
                  onClick={() => toggleCategory(node.wordpress_id)}
                >
                  <i dangerouslySetInnerHTML={{ __html: node.acf.menuIcon }}></i>
                  <span>{node.acf.menuName}</span>
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}

export default Header
