import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const blog05032020 = () => (
  <Layout>
      <SEO title="blog05032020" />
      <h1 class="centerH1">Mudança no header</h1>
      <h5 class="centerH1"><p>por: Leonardo Kawasaki | 05/03/2020</p></h5>
      <div class="postagem">
          <p>
              Decidi tirar a barra de menu que ficava em baixo do header o <i>ul</i>, depois de perceber que nenhum blog
              que acessei continha aquele estilo. Estava usando um <i>position: stick</i> para que sempre
              ficasse aparecendo na tela, mesmo após o rolamento da página. Então seguindo estes blogs resolvi 
              colocar os itens desse menu (projetos, sobre, contato) junto com o header e o nome do blog (Blog do Léo), 
              que acabou se tornando o link para a home.
          </p>
          <p>
              Deu um pouco de trabalho para encaixar usando o "inline-block", ainda assim preciso deixar ele
              mais responsivo.
          </p>
      </div>
    <br></br>
  </Layout>
)

export default blog05032020