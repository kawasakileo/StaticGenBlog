import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import Image2 from "../components/image2"
import SEO from "../components/seo"

const Techstack = () =>
  <Layout>
      <SEO title="Techstack" />
      <h1 class="centerH1">Tech Stack</h1>
      <h3 class="centerH1">Projeto Static Generated Blog</h3>
      <div class="postagem">
          <p>
              TechStack utilizado para a confecção deste blog:
          </p>
          <p>
              Para sua construção foi utilizado HTML5, CSS3 e JavaScript. Tudo isso através do 
              GatsbyJS que é um Static Site Generator de código aberto que reúne as melhores 
              funcionalidades do React com foco em tornar o desenvolvimento de sites 
              mais eficiente. 
          </p>
          <p>
          <div style={{ marginBottom: `1.45rem`, width: `150px`, 
              height: `130px`, display: `inline-block`, marginLeft: '210px', marginRight: `15px` }}>
                  <Image />
          </div>
          <div style={{ marginBottom: `1.45rem`, width: `60px`, 
              height: `85px`, display: `inline-block` }}>
                  <Image2 />
          </div>
          </p>
          <p>
              Repositório: <a target="_blank" rel="noopener noreferrer"
                  href="https://github.com/kawasakileo/StaticGenBlog">StaticGenBlog</a>
          </p>
      </div>
  </Layout>

export default Techstack
