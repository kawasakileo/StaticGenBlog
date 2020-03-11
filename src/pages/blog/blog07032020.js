import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const blog07032020 = () => (
    <Layout>
        <SEO title="blog07032020" />
        <h1 class="centerH1">Refactor nos blog entries</h1>
        <h5 class="centerH1"><p>por: Leonardo Kawasaki | 01/03/2020</p></h5>
        <div class="postagem">
            <p>
                Mudei novamente o estilo da página :B. Desse vez centralizei os blog entries e aumentei a fonte,
                alterei o aspecto de "botão" que eles tinham, tirando a cor e as bordas principalmente. Agora o
                efeito mais evidente que os links tem são aumento do seu formato no hover.
            </p>
            <p>
                Alterei também a base do blog entries no index. Adicionarei uma descrição a todos mais para frente.
            </p>
            <p>
                Adicionei um gradiente no header para não ficar uma cor muito "seca".
            </p>
        </div>
        <br></br>
    </Layout>
)

export default blog07032020