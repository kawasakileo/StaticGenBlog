import React, { Component } from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Disqus from "disqus-react"

export default class extends Component {
  render() {
    const disqusShortname = "testedodisqus" //found in your Disqus.com dashboard
    const disqusConfig = {
      url: "http://blogpi2.online/blog/blog01032020", //this.props.pageUrl
      identifier: "64064064064", //this.props.uniqueId
      title: "Day One" //this.props.title
    }

    return (
      <Layout>
        <SEO title="blog01032020" />
        <h1 class="centerH1">Day one</h1>
        <h5 class="centerH1"><p>por: Leonardo Kawasaki | 01/03/2020</p></h5>
        <div class="postagem">
          <p>
            Após uma breve pesquisa sobre static generators, decidi utilzar o Gatsby.js e este dia
            foi o primeiro de desenvolvimento do blog. O professor nos passou um site com diversas 
            opções de static generators, porém nos recomendou usarmos o Next.js, Hugo, Jekyll ou 
            o próprio Gatsby.js. 
          </p>
          <p>
            Dei prioridade para as recomendações do professor, então comecei a filtrar as opções.
            Primeiro descartei o Jekyll, principamente pelo motivo dele usar o Ruby, uma linguamgem
            que tenho pouquíssimo conhecimento. Depois descartei o Hugo, basicamente pelo mesmo motivo do
            Jekyll: utilizar uma linguamgem que não conheço, no caso, Go. Restaram o Next.js e o escolhido
            Gatsby. O Gatsby acabou vencendo o Next pela razão de possuir plugins interessantes de interface e 
            também por proporcionar desde o começo uma aplicação mais pronta, até mesmo que não usasse plugins.
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
