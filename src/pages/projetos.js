import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Projetos = () => (
  <Layout>
    <SEO title="Projetos" />
      <h1 class="centerH1">Projetos</h1>
      <h3 class="centerH1">Calculadora de Algoritmos de Cálculos Numérico</h3>
      <div class="postagem">
        <p>
          Projeto que foi produzido durante a matéria de Cálculo Numérico, da professora Tânia Camila. Consiste
          em algoritmos que calculam os métodos da Bissecção, de Gauss e de laGrange. 
        </p>
        <p>
          Para sua construção foi utilizado a linguagem Java com biblioteca Java Swing e a IDE IntellijIDEA.
        </p>
        <p>
          Repositório: <a target="_blank" rel="noopener noreferrer" 
            href="https://github.com/kawasakileo/AlgoritmosDeCalculoNumerico">AlgoritmosDeCalculoNumerico</a>
        </p>
      </div>
      <br></br>
      <h3 class="centerH1">Web Login e CRUD</h3>
      <div class="postagem">
        <p>
          Este projeto foi produzido por conta própria, enquanto eu realiza o curso de Java Web da FTI (empresa de
          software de Londrina). É um sistema simples que conta com uma validação e cadastro de usuário e senha.
          Após o login realizado o usuário entraria num menu para fazer CRUDs de pessoas, onde os campos são 
          pessoas, onde os campos eram nome, sobrenome, CPF e CEP.
        </p>
        <p>
          Para sua construção foi utilizado a linguagem Java Enterprise Edition, JSP e JDBC. A linguagem de banco
          de dados utilizada foi o MySql através do MySql Workbench. E a IDE que usei foi o Eclipse.
        </p>
        <p>
          Repositório: <a target="_blank" rel="noopener noreferrer" 
            href="https://github.com/kawasakileo/WebLogin">WebLogin</a>
        </p>
      </div>
  </Layout>
)

export default Projetos
