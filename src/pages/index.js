import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Index" />
    <p style={{textAlign: "center", fontSize: 16, marginRight: `6em`, marginLeft: `6em`}}>
      <strong>Seja bem vindo ao meu blog!</strong> Aqui postarei sobre a minha experiência sobre o 
      desenvolvimento deste site, que faz parte das atividades da matéria de Projeto Interdisciplinar II 
      do curso de Ciência da Computação da Unifil.
    </p>
    <hr class="hr"></hr>
    <div class="blogEntry">
      <h1><a href="/blog/blog23042020/" class="blogEntryButton">Hospedagem nas nuvens</a></h1>
      <h5><p>Realização da hospedagem do blog.</p></h5>
      <h6><p>por: Leonardo Kawasaki | 23/04/2020</p></h6>
    </div>
    <div class="blogEntry">
      <h1><a href="/blog/blog29032020/" class="blogEntryButton">A primeira entrega</a></h1>
      <h5><p>Relatos sobre a experiência da criação do blog e do uso do Gatsby.</p></h5>
      <h6><p>por: Leonardo Kawasaki | 29/03/2020</p></h6>
    </div>
    <div class="blogEntry">
      <h1><a href="/blog/blog28032020/" class="blogEntryButton">Header responsivo e páginas com conteúdo</a></h1>
      <h5><p>Finalmente o consegui o header responsivo e as páginas com conteúdo!</p></h5>
      <h6><p>por: Leonardo Kawasaki | 28/03/2020</p></h6>
    </div>
    <div class="blogEntry">
      <h1><a href="/blog/blog07032020/" class="blogEntryButton">Refactor nos blog entries</a></h1>
      <h5><p>Mudança no aspectos dos botões do blog e mais estilos.</p></h5>
      <h6><p>por: Leonardo Kawasaki | 07/03/2020</p></h6>
    </div>
    <br></br>
    <div class="blogEntry">
      <h1><a href="/blog/blog05032020/" class="blogEntryButton">Mudança no header</a></h1>
      <h5><p>Novo header para conter todos os links.</p></h5>
      <h6><p>por: Leonardo Kawasaki | 05/03/2020</p></h6>
    </div>
    <br></br>
    <div class="blogEntry">
      <h1><a href="/blog/blog03032020/" class="blogEntryButton">Testes nos estilos</a></h1>
      <h5><p>Testes usando HTML e CSS, botões e headers.</p></h5>
      <h6><p>por: Leonardo Kawasaki | 03/03/2020</p></h6>
    </div>
    <br></br>
    <div class="blogEntry">
      <h1><a href="/blog/blog01032020/" class="blogEntryButton">Day one</a></h1>
      <h5><p>Primeiro dia de programação do blog e a escolha do Static Generator.</p></h5>
      <h6><p>por: Leonardo Kawasaki | 01/03/2020</p></h6>
    </div>
    <br></br>
  </Layout>
)

export default IndexPage
