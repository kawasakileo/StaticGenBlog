import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const blog29032020 = () => (
  <Layout>
      <SEO title="blog29032020" />
      <h1 class="centerH1">A primeira entrega</h1>
      <h5 class="centerH1"><p>por: Leonardo Kawasaki | 29/03/2020</p></h5>
      <div class="postagem">
          <p>
              Chegou o dia da primeira entrega do blog. Nela os alunos deviam criar um blog usando um
              static generator e versioná-lo utilizando alguma ferramenta de versionamento. Utilizei o Gatsby,
              que é baseado em JavaScript e o Git com um repositório no GitHub.  
          </p>
          <p>
              A proposta do static generator foi algo novo para mim, sempre que fiz projetos/experimentos web
              utilizava o conhecimento e famoso: Java Enterprise Edition. Tinha alguns receios sobre utlizar um 
              static generator, justamente por estar acomodado com o JEE, porém a experiência até aqui foi positiva. 
              A facilidade e a agilidade de começar o projeto e já ter algo rodando em sua máquina é centenas de 
              vezes maior que a do JEE. No começo fiquei até um pouco transtornado com a esta diferença.  
          </p>
          <p>
              Já na questão do versionamento, já possuia uma experiência sólida com o Git e o GitHub, ferramenta 
              e plataformas consolidadas pela comunidade e muito confiáveis, assim não tive nenhum problema nessa segunda 
              questão do trabalho.   
          </p>
          <p>
              O próximo passo será criar um servidor na nuvem e nele hospedar o blog.
          </p>
      </div>
    <br></br>
  </Layout>
)

export default blog29032020