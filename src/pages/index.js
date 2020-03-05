import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Index" />
    {/* <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/projetos/">Projetos</a></li>
      <li><a href="/sobre/">Sobre</a></li>
      <li><a href="/contato/">Contato</a></li>
    </ul>
    <br></br> */}

    <div id="blogEntryDiv">
      <h2><a href="/blog/blog01032020/" class="blogEntryButton">Day One - 01/03/2020</a></h2>
      <h5><p>Escrito por: Leonardo Kawasaki</p></h5>
      <h6><p>Publicado em: 01/03/2020</p></h6>
    </div>
    <br></br>

    <div id="blogEntryDiv">
      <h2><a href="/blog/blog03032020/" class="blogEntryButton">Testes nos estilos - 03/03/2020</a></h2>
      <h5><p>Escrito por: Leonardo Kawasaki</p></h5>
      <h6><p>Publicado em: 03/03/2020</p></h6>
    </div>
    <br></br>

    <div id="blogEntryDiv">
      <h2><a href="/blog/blog05032020/" class="blogEntryButton">Mudança no Header - 05/03/2020</a></h2>
      <h5><p>Escrito por: Leonardo Kawasaki</p></h5>
      <h6><p>Publicado em: 05/03/2020</p></h6>
    </div>
    <br></br>

    {/* Exemplo de Input de Imagem */}
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
  </Layout>
)

export default IndexPage
