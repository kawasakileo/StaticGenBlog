import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const blog03032020 = () => (
    <Layout>
        <SEO title="blog03032020" />
        <h1 class="centerH1">Testes nos estilos</h1>
        <h5 class="centerH1"><p>por: Leonardo Kawasaki | 01/03/2020</p></h5>
        <div class="postagem">
            <p>
                Utilizando o conhecimento que ja obtinha sobre HTML e CSS, testei alguns estilos para as blog entries.
            </p>
            <p>
                Apliquei um Hover ao link, em que sua caixa mudava sua cor de branco para azul. Também utilizei um shadow
                para destacar ainda mais o botão quando o mouse estiver apontado nele.
            </p>
            <p>
                Por fim adicionei um timer nesses links e também na barra de menu (que fica em baixo do header).
            </p>
        </div>
        <br></br>
    </Layout>
)

export default blog03032020