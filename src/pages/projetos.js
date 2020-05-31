import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image4 from "../components/image4"
import Image5 from "../components/image5"

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
    <br></br>
    <h3 class="centerH1">Farmer Portal Admin</h3>
    <div class="postagem">
      <p>
        O Farmer Portal Admin é o meu projeto de estágio, onde estou fazendo na Farmbits, empresa que trabalho.
        É um sistema web que vai funcionar como administrador do Portal do Produtor e do Aplicativo Conecta Sales 
        da Belagrícola.
      </p>
      <p>
        O projeto ainda está em desenvolvimento, mas suas principais funcionalidades são alteração dos dados dos
        quatro tipos de usuários (administrador, produtor, gerente e consultor) do Conecta e o vínculo entre as 
        filias da Belagrícola com os usuários do tipo gerente e consultor.
      </p>
      <p>
        Para o desenvolvimento deste sistema estou usuando a linguagem de programação Java com o framework Spring 
        Boot para o back-end. No front-end estou usando o Vue.js junto com o Nuxt.js. Já na parte do banco de dados
        utilizo o Postgresql.
      </p>
      <p>
        Repositório: Infelizmente não posso mostrar. Está na conta privada da empresa no GitLab :(
      </p>
      <p><strong>Imagens:</strong></p>
      <div style={{width: `640px`, height: `360px`, marginLeft: `190px`}}><Image4 /></div>
      <div style={{width: `640px`, height: `360px`, marginLeft: `190px`}}><Image5 /></div>
    </div>
  </Layout>
)

export default Projetos
