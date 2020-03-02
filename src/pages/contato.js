import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const contato = () => (
    <Layout>
        <SEO title="Contato" />
        <h1>Contato</h1>
        <p><Link to="/">Home</Link></p>
    </Layout>
)
  
export default contato