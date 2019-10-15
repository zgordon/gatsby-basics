import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from "../components/seo"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fixed(width: 200, height: 200, grayscale: true) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
      body
    }
  }
`

export default ({
  data: {
    mdx: {
      frontmatter: { title, image },
      body,
    },
  },
}) => (
  <Layout>
    <SEO title={`${title} | Blog`} />
    <p>
      <Link to={"/blog/"}>&lt; Back to all posts</Link>
    </p>
    <Img alt={title} fixed={image.childImageSharp.fixed} />
    <h1>{title}</h1>
    <MDXRenderer>{body}</MDXRenderer>
  </Layout>
)
