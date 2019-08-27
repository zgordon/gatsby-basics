import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <h1>About Me!</h1>
    <p>
      Go back <Link to={"/"}>home</Link>.
    </p>
  </Layout>
)
