import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Index" />
    <p style={{textAlign: "center", fontSize: 16, marginRight: `6em`, marginLeft: `6em`}}>
      <strong>Seja bem vindo ao meu blog!</strong> Aqui postarei sobre a minha experiência sobre o 
      desenvolvimento deste site, que faz parte das ativdades da matéria de Projeto Interdisciplinar II 
      do curso de Ciência da Computação da Unifil.
    </p>
    <hr class="hr"></hr>
    <div class="blogEntry">
      <h1><a href="/blog/blog07032020/" class="blogEntryButton">Refactor nos blog entries</a></h1>
      <h5><p>Alguma descrição aqui...</p></h5>
      <h6><p>por: Leonardo Kawasaki | 07/03/2020</p></h6>
    </div>
    <br></br>
    <div class="blogEntry">
      <h1><a href="/blog/blog05032020/" class="blogEntryButton">Mudança no header</a></h1>
      <h5><p>Alguma descrição aqui...</p></h5>
      <h6><p>por: Leonardo Kawasaki | 05/03/2020</p></h6>
    </div>
    <br></br>
    <div class="blogEntry">
      <h1><a href="/blog/blog03032020/" class="blogEntryButton">Testes nos estilos</a></h1>
      <h5><p>Alguma descrição aqui...</p></h5>
      <h6><p>por: Leonardo Kawasaki | 03/03/2020</p></h6>
    </div>
    <br></br>
    <div class="blogEntry">
      <h1><a href="/blog/blog01032020/" class="blogEntryButton">Day One</a></h1>
      <h5><p>Alguma descrição aqui...</p></h5>
      <h6><p>por: Leonardo Kawasaki | 01/03/2020</p></h6>
    </div>
    <br></br>

    {/* Exemplo de Input de Imagem */}
    {/* <div style={{ maxWclassth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
  </Layout>
)

export default IndexPage
