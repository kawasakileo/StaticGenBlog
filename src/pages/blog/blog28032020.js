import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const blog28032020 = () => (
    <Layout>
        <SEO title="blog28032020" />
        <h1 class="centerH1">Header Responsivo e páginas com conteúdo</h1>
        <h5 class="centerH1"><p>por: Leonardo Kawasaki | 28/03/2020</p></h5>
        <div class="postagem">
            <p>
                Hoje após algumas semanas, voltei ao desenvolvimento do blog, devido é claro
                à entrega ser amanhã. Finalmente consegui tornar o conteúdo do header (mais ou menos) 
                responsivo. Utilizei os components de <i>margin</i> e <i>float</i> para atingir o resultado.
            </p>
            <p>
                Adicionei também a página Tech Stack, que agora contém a um resumo sobre o que foi utilizado
                para a criação deste blog. Finalmente adicionei conteúdo as páginas "projetos" e "sobre", que
                contém alguns projetos que fiz e um pouco sobre mim respectivamente.
            </p>
            <p>
                Trabalhei um pouco com images também. Foi algo que não achei muito ágil usando Gatsby, principalmente
                porque me acostumei com o Vuetify, framework que estou usando no projeto de estágio.
            </p>
        </div>
        <br></br>
    </Layout>
)

export default blog28032020