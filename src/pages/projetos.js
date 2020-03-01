import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Projetos" />
    <h1>Projetos</h1>
    <p><Link to="/">Home</Link></p>
  </Layout>
)

export default SecondPage
