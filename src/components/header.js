import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header id="header" style={{ marginBottom: 23, paddingTop: 17, paddingBottom: 0, paddingLeft: 18, paddingRight: 17 }}>
    <div style={{ marginLeft: 175, maxWidth: 960, display: `inline-block`}}>
      <h1 id="headerH1" style={{ fontWeight: 600 }}>
        <Link to="/" style={{ margin: 0, color: `white`, textDecoration: `none`, fontSize: `32px` }}>
          <p id="headerP">{siteTitle}</p>
        </Link>
      </h1>
    </div>

    <div style={{ maxWidth: 960, display: `inline-block` }}>
      <h3 id="headerH3" style={{ marginLeft: 520, fontWeight: 450 }}>
        <Link to="/projetos/" style={{ color: `white`, textDecoration: `none` }}>
          <p id="headerP">Projetos</p>
        </Link>
      </h3>
    </div>

    <div style={{ maxWidth: 960, display: `inline-block` }}>
      <h3 id="headerH3" style={{ marginLeft: 15, fontWeight: 450 }}>
        <Link to="/sobre/" style={{ color: `white`, textDecoration: `none` }}>
          <p id="headerP">Sobre</p>
        </Link>
      </h3>
    </div>

    <div style={{ maxWidth: 960, display: `inline-block` }}>
      <h3 id="headerH3" style={{ marginLeft: 15, fontWeight: 450 }}>
        <Link to="/contato/" style={{ color: `white`, textDecoration: `none` }}>
          <p id="headerP">Contato</p>
        </Link>
      </h3>
    </div>
  </header>
)

// const Header = ({ siteTitle }) => (
//   <header
//     style={{
//       background: `#3366ff`,
//       // marginBottom: `1.45rem`,
//       marginBottom: `0px`,
//     }}
//   >

//     <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: 960,
//         // padding: `1.45rem 1.0875rem`,
//         padding: `19px`,
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: `white`,
//             textDecoration: `none`,
//             display: `inline`,

//           }}
//         >
//           {siteTitle}
//         </Link>
//       </h1>
//     </div>
//   </header>
// )

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
