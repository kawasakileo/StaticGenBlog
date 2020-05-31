import React, { Component } from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Disqus from "disqus-react"

export default class extends Component {
  render() {
    const disqusShortname = "testedodisqus" //found in your Disqus.com dashboard
    const disqusConfig = {
    	url: "http://blogpi2.online/blog/blog03032020", //this.props.pageUrl
      identifier: "045046540680", //this.props.uniqueId
      title: "Testes nos estilos" //this.props.title
		}  
  
    return (
      <Layout>
      <SEO title="blog03032020" />
      <h1 class="centerH1">Testes nos estilos</h1>
      <h5 class="centerH1"><p>por: Leonardo Kawasaki | 03/03/2020</p></h5>
      <div class="postagem">
        <p>
          Utilizando o conhecimento que ja tinha sobre HTML e CSS, testei alguns estilos para as blog entries.
          Comecei utilizando botões estilizados, botões são mais simples para disparar a ação de ir para outra página.
        </p>
        <p>
          Apliquei um <i>hover</i>, que é aquele usado quando passamos o cursor do mouse por cima de algum elemento
          na página html, geralmente é aplicado um efeito sobre essa ação, no caso, em que sua caixa do botão 
          mudava sua cor de branco para azul. Também utilizei um <i>shadow</i>, uma sombra ao redor da caixa que gera 
          uma sensação de elevação, para destacar ainda mais o botão quando o mouse estiver apontado nele.
        </p>
        <p>
          Por fim adicionei um timer (pequeno delay na reposta do <i>hover</i>) nesses botões, para dar ainda 
          mais destaque ao hover e também na barra de menu (que fica em baixo do header).
        </p>
        <p>
          A priori não pretendo utilizar nenhum plugin e vou continuar implementado o meu próprio estilo.
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
