import React, { Component } from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Disqus from "disqus-react"

export default class extends Component {
  render() {
    const disqusShortname = "testedodisqus" //found in your Disqus.com dashboard
    const disqusConfig = {
      url: "http://blogpi2.online/blog/blog23042020", //this.props.pageUrl
      identifier: "65434664319613", //this.props.uniqueId
      title: "Hospedagem nas nuvens" //this.props.title
    }

    return (
      <Layout>
        <SEO title="blog23042020" />
        <h1 class="centerH1">Hospedagem nas nuvens</h1>
        <h5 class="centerH1"><p>por: Leonardo Kawasaki | 23/04/2020</p></h5>
        <div class="postagem">
          <p>
              Na segunda entrega, foi demandado a hospedagem do blog em algum provedor em <i>cloud</i>.
              O professor havia nos sugeriu alguns hosts famosos como a AWS, o Azure e o Google Cloud. Considerei
              outras alternativas como o Netlify, que contém integração com o git e facilitaria na
              atualização do blog, porém optei pela a opção que atenderia melhor os requistos da atividade e
              escolhi a AWS.
          </p>
          <p>
              Apesar de ter pouca experiência com hospedagem e <i>cloud</i>, não foi tão complicado executar
              a tarefa vendo alguns tutoriais e agora o site <b>tá online mem</b>.
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
