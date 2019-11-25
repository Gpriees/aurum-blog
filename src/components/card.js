import React from "react"
import { Link } from "gatsby"

const Card = ({post}) => {
  const category = post.categories[0]

  return (
    <div class="card">
      <Link to={`/${category.slug}/${post.slug}`}>
        <img src={post.featured_media.localFile.childImageSharp.fluid.src} alt={`Imagem - ${post.title}`} />
      </Link>

      <h2>{post.title}</h2>

      <p>{post.acf.assunto}</p>

      <Link class="show-more" to={`/${category.slug}/${post.slug}`}>
        <i dangerouslySetInnerHTML={{ __html: post.acf.showMoreIcon }}></i>
        <span>{post.acf.showMoreText}</span>
      </Link>
    </div>
  )
}

export default Card
