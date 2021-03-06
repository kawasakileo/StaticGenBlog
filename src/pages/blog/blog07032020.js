import React, { Component } from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Disqus from "disqus-react"

export default class extends Component {
  render() {
    const disqusShortname = "testedodisqus" //found in your Disqus.com dashboard
    const disqusConfig = {
      url: "http://blogpi2.online/blog/blog07032020", //this.props.pageUrl
      identifier: "464846462", //this.props.uniqueId
      title: "Refactor nos blog entries" //this.props.title
    }

    return (
      <Layout>
        <SEO title="blog07032020" />
        <h1 class="centerH1">Refactor nos blog entries</h1>
        <h5 class="centerH1"><p>por: Leonardo Kawasaki | 07/03/2020</p></h5>
        <div class="postagem">
          <p>
            Mudei novamente o estilo da página :D. Desse vez centralizei os blog entries e aumentei a fonte,
            alterei o aspecto de caixa que eles tinham, tirando a cor e as bordas principalmente. Agora o
            efeito mais evidente que os links tem são o aumento do seu formato no hover. Fiz isso pois procurei
            sobre alguns blogs concentuais e gostei mais do minimalistas, que possuiam algo (mais ou menos)
            parecido com que fiz.
        </p>
          <p>
            Alterei também a parte de baixo dos blog entries no index, mostrando o autor, data e uma breve descrição.
            Adicionarei a descrição a todos mais para frente.
        </p>
          <p>
            Adicionei um gradiente no header para não ficar uma cor muito "seca". No contexto do CSS
            é usado o termo gradiente para se referir a gradiente de cores, o famoso degradê.
            Resumindo, é a transição de cores em um determinado espaço.
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
