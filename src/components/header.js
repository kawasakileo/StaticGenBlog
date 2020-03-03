import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#3366ff`,
      // marginBottom: `1.45rem`,
      marginBottom: `0px`,
    }}
  >

    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        // padding: `1.45rem 1.0875rem`,
        padding: `19px`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            display: `inline`,
            
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      {/* <h4 style={{ margin: 0 }}>
        <Link
          to="/projetos/"
          style={{
            color: `white`,
            textDecoration: `none`,
            display: `inline`,
                    
          }}
        >
          Projetos 
        </Link>
      </h4>
      <h4 style={{ margin: 0 }}>
        <Link
          to="/sobre/"
          style={{
            color: `white`,
            textDecoration: `none`,
            display: `inline`,   
          }}
        >
          Sobre
        </Link>
      </h4>
      <h4 style={{ margin: 0 }}>
        <Link
          to="/contato/"
          style={{
            color: `white`,
            textDecoration: `none`,
            display: `inline`,
                 
          }}
        >
          Contato
        </Link>
      </h4> */}
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
