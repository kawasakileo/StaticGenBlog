import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Index" />
    <h1>Hello World!</h1>
    <p><Link to="/projetos/">Projetos</Link></p>
    <p><Link to="/about/">About</Link></p>
    <p><Link to="/contato/">Contato</Link></p>

    <h2><a href="/blog/blog01032020/" class="blogEntryButton">Day One - 01/03/2020</a></h2>
    
    {/* Exemplo de Input de Imagem */}
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
