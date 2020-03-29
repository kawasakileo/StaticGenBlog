import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const blog03032020 = () => (
  <Layout>
      <SEO title="blog03032020" />
      <h1 class="centerH1">Testes nos estilos</h1>
      <h5 class="centerH1"><p>por: Leonardo Kawasaki | 03/03/2020</p></h5>
      <div class="postagem">
          <p>
              Utilizando o conhecimento que ja obtinha sobre HTML e CSS, testei alguns estilos para as blog entries.
              Comecei utilizando botões estilizados, mais simples para disparar a ação de ir para outra página.
          </p>
          <p>
              Apliquei um Hover, que é aquele usado quando passamos o cursor do mouse por cima de algum elemento
              na página html, geralmente é aplicado um efeito sobre essa ação, em que sua caixa mudava sua cor de 
              branco para azul. Também utilizei um shadow, uma sombra ao redor da caixa que gera uma sensação de elevação,
              para destacar ainda mais o botão quando o mouse estiver apontado nele.
          </p>
          <p>
              Por fim adicionei um timer nesses botões, para dar ainda mais destaque ao hover e 
              também na barra de menu (que fica em baixo do header).
          </p>
      </div>
    <br></br>
  </Layout>
)

export default blog03032020