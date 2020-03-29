import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contato = () => (
  <Layout>
      <SEO title="Contato" />
      <h1 class="centerH1">Contato</h1>
      <div class="postagem" style={{ marginLeft: `200px`}}>
      <h4><p>Email: leonardokws@edu.unifil.br</p></h4>
      <h4 style={{ marginBottom: `35px` }}><p>Redes Sociais: <a 
          target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/leonardo-kawasaki/"> LinkedIn</a> | <a 
          target="_blank" rel="noopener noreferrer" href="https://github.com/kawasakileo">GitHub</a></p></h4>
      </div>
  </Layout>
)
  
export default Contato
