import React, { Component } from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Disqus from "disqus-react"

export default class extends Component {
  render() {
    const disqusShortname = "testedodisqus" //found in your Disqus.com dashboard
    const disqusConfig = {
      url: "http://blogpi2.online/blog/blog31052020", //this.props.pageUrl
      identifier: "79765421310", //this.props.uniqueId
      title: "Usando o Disqus" //this.props.title
    }

    return (
      <Layout>
        <SEO title="blog31052020" />
        <h1 class="centerH1">Usando o Disqus</h1>
        <h5 class="centerH1"><p>por: Leonardo Kawasaki | 31/05/2020</p></h5>
        <div class="postagem">
          <p>
            Outro recurso solicitado para essa entrega foi a adição do Disqus. O Disqus é um serviço
            online que oferece uma plataforma centralizada de discussões e postagem de comentários para sites.
            Suporta integração com Gravatar, Orkut, Facebook, Twitter e outras redes sociais.
          </p>
          <p>
            Instalá-lo no blog foi mais simples do que imaginava, porém houveram alguns problemas. Primero tentei
            adiciona-lo utilizando o chamado "código universal" fornecido pelo serivço, onde só é preciso colá-lo
            nas páginas que desejar do seu site. O que aconteceu foi que este código não compilou na minha aplicação
            Gastsby e tive que procurar outra solução.
					</p>
          <p>
            A solução foi instalar sua biblioteca diretamente usando o comando <mark> $ npm install disqus-react
						--save </mark>, o que acabou resultando num código mais bonito do que utilizar o código universal.
						Este tutorial me auxiliou nessa tarefa:
            <a target="_blank" rel="noopener noreferrer"
              href="https://coderrocketfuel.com/article/how-to-add-disqus-to-a-react-application"><i> How to add
            Disqus to a react application</i></a>.
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
