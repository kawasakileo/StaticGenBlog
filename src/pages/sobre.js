import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image3 from "../components/image3"

const Sobre = () =>
  <Layout>
      <SEO title="Sobre" />
      <h1 class="centerH1">Sobre</h1>
      <div class="postagem" style={{ marginBottom: `50px`}}>
          <div style={{ marginBottom: `1.45rem`, width: `200px`, height: `200px`, marginLeft: `380px`}}>
              <Image3 />
          </div>
          <p>
              <h3 style={{ marginLeft: `15px` }}><p>Nome: <strong>Leonardo Kawasaki</strong></p></h3>
              <h4 style={{ marginLeft: `42px` }}><p>Idade: <strong>20 anos</strong></p></h4>
              <h4 style={{ marginLeft: `42px` }}><p>Curso: <strong>Ciência da Computação</strong></p></h4>
              <h4 style={{ marginLeft: `42px` }}><p>Linguagem Favorita: <strong>Java :)</strong></p></h4>
              <h4 style={{ marginLeft: `42px` }}><p>Curiosidades: Moro em Cambé, torço para o Flamengo e 
                  meu jogo favorito é o Fifa.</p></h4>
            </p>
      </div>
  </Layout>

export default Sobre
