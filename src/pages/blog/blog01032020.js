import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const blog01032020 = () => (
    <Layout>
        <SEO title="blog01032020" />
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/projetos/">Projetos</a></li>
            <li><a href="/sobre/">Sobre</a></li>
            <li><a href="/contato/">Contato</a></li>
        </ul>
        <h1>blog01032020</h1>
        <p>Após uma breve pesquisa sobre static generators, decidi utilzar o Gatsby.js e neste dia (01/03/2020) 
        foi o primeiro de desenvolvimento do blog.</p>
    </Layout>
)

export default blog01032020