import React, { Component } from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Disqus from "disqus-react"

export default class extends Component {
  render() {
    const disqusShortname = "testedodisqus" //found in your Disqus.com dashboard
    const disqusConfig = {
      url: "http://blogpi2.online/blog/blog28032020", //this.props.pageUrl
      identifier: "6494138320054", //this.props.uniqueId
      title: "Header responsivo e páginas com conteúdo" //this.props.title
    }

    return (
      <Layout>
        <SEO title="blog28032020" />
        <h1 class="centerH1">Header responsivo e páginas com conteúdo</h1>
        <h5 class="centerH1"><p>por: Leonardo Kawasaki | 28/03/2020</p></h5>
        <div class="postagem">
          <p>
            Hoje após algumas semanas voltei ao desenvolvimento do blog, devido muito é claro
            à entrega ser amanhã. Finalmente consegui tornar o conteúdo do header (mais ou menos)
          responsivo. Utilizei os componentes de <i>margin</i> e <i>float</i> para atingir o resultado.
        </p>
          <p>
            Adicionei também a página Tech Stack, que agora contém um resumo sobre o que foi utilizado
            para a criação deste blog. Em fim adicionei conteúdo as páginas "projetos", "sobre" e "contato",
            que contém alguns projetos que fiz e um pouco sobre mim, respectivamente.
        </p>
          <p>
            Trabalhei um pouco com images também. Foi algo que não achei muito ágil usando Gatsby, principalmente
            porque me acostumei com o Vuetify, framework que estou usando no projeto de estágio.
        </p>
        </div>
        <br></br>
        <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </Layout>
    )
  }
}
