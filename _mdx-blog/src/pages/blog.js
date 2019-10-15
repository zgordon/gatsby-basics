import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogListing = () => {
  const data = useStaticQuery(graphql`
    query PostsQuery {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          id
          frontmatter {
            title
            excerpt
            slug
            date(formatString: "MM.DD.YYYY")
            image {
              childImageSharp {
                fixed(width: 100, height: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  `)

  const posts = data.allMdx.nodes

  return (
    <Layout>
      <SEO title="Blog Posts" />
      <h1>Blog Posts</h1>
      <hr />
      {posts.map(({ id, frontmatter: { title, excerpt, slug, image } }) => (
        <article key={id}>
          {image && <Img alt={title} fixed={image.childImageSharp.fixed} />}
          <h3>
            <Link to={`/blog/${slug}`}>{title}</Link>
          </h3>
          <p>{excerpt}</p>
        </article>
      ))}
    </Layout>
  )
}

export default BlogListing
