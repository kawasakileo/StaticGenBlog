import React, { Component } from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Disqus from "disqus-react"

export default class extends Component {
  render() {
    const disqusShortname = "testedodisqus" //found in your Disqus.com dashboard
    const disqusConfig = {
      url: "http://www.blogpi2.online/blog/blog300452020", //this.props.pageUrl
      identifier: "01101156616061", //this.props.uniqueId
      title: "Compra do domínio e criação do e-mail" //this.props.title
    }

    return (
      <Layout>
        <SEO title="blog30052020" />
        <h1 class="centerH1">Compra do domínio e criação do e-mail</h1>
        <h5 class="centerH1"><p>por: Leonardo Kawasaki | 30/04/2020</p></h5>
        <div class="postagem">
          <p>
            Para a terceira e última entrega foram solicitadas a compra de um domínio, a criação de um e-mail 
						com este domínio e adição de uma seção de comentários para cada entrada do blog. Nesta entrada falarei
						dos dois primeiros requisitos.
          </p>
					<p>
						Para a compra do domínio utilizei a plataforma GoDaddy, dei uma olhada no Google Domains porém os preços
						estavam bem acima do primeiro concorrente (pesquisa realizada em Maio de 2020). Para titulo de comparação
						paguei R$10,00 no nome blogpi2.online já com um endereço de e-mail, no Google Domains os mesmos produtos
						sairiam R$62,00.
					</p>
					<p>
						Tive alguns problemas com o site da GoDaddy pois como o conteúdo do site está hospedado na AWS tive que
						trocar os NameServers do domínio para lá e ao tentar trocar o site apontava um erro sem nenhuma explicação.
						Assim recorri ao serviço de suporte da plataforma, que surpreendetente foi muito bom(!) e fizeram a troca
						dos nomes para mim.   
					</p>
					<p>
						A configuração do email foi simples, o sistema da GoDaddy identificou a troca dos NameServers e me 
						forneceu os registros MX e CNAME para adicionar aos registros da AWS, assim nessa parte tudo funcionou 
						rapidamente.
					</p>
          <p>
            Mandem e-mails para: <mark>fwdwebmaster@blogpi2.online</mark>
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
