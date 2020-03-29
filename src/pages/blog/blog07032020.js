import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const blog07032020 = () => (
  <Layout>
      <SEO title="blog07032020" />
      <h1 class="centerH1">Refactor nos blog entries</h1>
      <h5 class="centerH1"><p>por: Leonardo Kawasaki | 07/03/2020</p></h5>
      <div class="postagem">
          <p>
              Mudei novamente o estilo da página :D. Desse vez centralizei os blog entries e aumentei a fonte,
              alterei o aspecto de caixa que eles tinham, tirando a cor e as bordas principalmente. Agora o
              efeito mais evidente que os links tem são aumento do seu formato no hover. Fiz isso pois, procurei
              sobre alguns blogs concentuais e gostei mais do minimalistas, que possuiam algo (mais ou menos)
              parecido com que fiz.
          </p>
          <p>
              Alterei também a base dos blog entries no index, mostrando o autor, data e uma breve descrição. 
              Adicionarei a descrição a todos mais para frente.
          </p>
          <p>
              Adicionei um gradiente no header para não ficar uma cor muito "seca". No contexto do CSS 
              é usado o termo gradiente para se referir a gradiente de cores, o famoso degradê. 
              Resumindo, é transição de cores em um determinado espaço.
          </p>
      </div>
    <br></br>
  </Layout>
)

export default blog07032020