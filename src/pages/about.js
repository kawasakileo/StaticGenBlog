import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () =>
    <Layout>
        <SEO title="Projetos" />
        <h1>About Me</h1>
        <p><Link to="/">Home</Link></p>
    </Layout>

export default AboutPage