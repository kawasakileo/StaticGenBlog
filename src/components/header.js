import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header style={{
    background: `linear-gradient(#0074D9, #33a0ff)`, marginBottom: `2.2%`,
    paddingTop: `1.3%`, paddingBottom: `0%`, paddingLeft: `0%`, paddingRight: `0%`
  }}>
    <div style={{ marginLeft: `16%`, display: `inline-block` }}>
      <h1>
        <Link to="/" style={{ fontSize: `46px`, color: `white`, textDecoration: `none` }}>
          <p class="headerP">{siteTitle}</p>
        </Link>
      </h1>
    </div>
    <div style={{ display: `inline-block`, float: `right`, marginRight: `16%` }}>
      <h3>
        <Link to="/contato/" style={{ color: `white`, fontWeight: 450, textDecoration: `none` }}>
          <p class="headerP">Contato</p>
        </Link>
      </h3>
    </div>
    <div style={{ display: `inline-block`, float: `right`, marginRight: `1%`}}>
      <h3>
        <Link to="/sobre/" style={{ fontWeight: 450, color: `white`, textDecoration: `none` }}>
          <p class="headerP">Sobre</p>
        </Link>
      </h3>
    </div>
    <div style={{ display: `inline-block`, float: `right`, marginRight: `1%` }}>
      <h3>
        <Link to="/techstack/" style={{ fontWeight: 450, color: `white`, textDecoration: `none` }}>
          <p class="headerP">Tech Stack</p>
        </Link>
      </h3>
    </div>
    <div style={{ display: `inline-block`, float: `right`, marginRight: `1%` }}>
      <h3>
        <Link to="/projetos/" style={{ fontWeight: 450, color: `white`, textDecoration: `none` }}>
          <p class="headerP">Projetos</p>
        </Link>
      </h3>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
