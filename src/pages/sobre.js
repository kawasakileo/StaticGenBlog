import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image3 from "../components/image3"
import Image2 from "../components/image2"

const Sobre = () =>
    <Layout>
        <SEO title="Sobre" />
        <h1 class="centerH1">Sobre</h1>
        <div class="postagem">
            <div style={{ marginBottom: `1.45rem`, width: `200px`, height: `200px`, marginLeft: `380px`}}>
                <Image3 />
            </div>
            <p>
                <h3 style={{ marginLeft: `15px` }}><p>Nome: <strong>Leonardo Kawasaki</strong></p></h3>
                <h4 style={{ marginLeft: `42px` }}><p>Idade: <strong>20 anos</strong></p></h4>
                <h4 style={{ marginLeft: `42px` }}><p>Curso: <strong>Ciência da Computação</strong></p></h4>
                <h4 style={{ marginLeft: `42px` }}><p>Linguagem Favorita: <strong>Java :)</strong></p></h4>
                <h5 style={{ marginLeft: `70px`, marginBottom: `35px` }}><p>Redes Sociais: <a target="_blank" rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/leonardo-kawasaki/">LinkedIn</a> | <a target="_blank" rel="noopener noreferrer"
                    href="https://github.com/kawasakileo">GitHub</a></p></h5>
            </p>
        </div>
    </Layout>

export default Sobre
