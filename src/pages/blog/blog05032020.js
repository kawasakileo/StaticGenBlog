import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const blog05032020 = () => (
    <Layout>
        <SEO title="blog05032020" />
        <h1>blog05032020</h1>
        <p>
            Decidi tirar a barra de menu que ficava em baixo do header (ul), depois de perceber que nenhum blog
            que acessei continha aquele estilo. Então seguindo estes blogs resolvi colocar os itens desse menu 
            (projetos, sobre, contato) junto com o header e o nome do blog (Blog do Léo) que acabou se tornando
            o link para a home.        
        </p>
        <p>
            Deu um pouco de trabalho para encaixar usando o "inline-block".
        </p>
    </Layout>
)

export default blog05032020