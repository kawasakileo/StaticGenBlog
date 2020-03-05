import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header style={{ background: `#3366ff`, marginBottom: 23, 
              paddingTop: 17, paddingBottom: 0, paddingLeft: 18, paddingRight: 17 }}>
    <div style={{ marginLeft: 175, maxWidth: 960, display: `inline-block`}}>
      <h1 style={{}}>
        <Link to="/" style={{ margin: 0, color: `white`, textDecoration: `none` }}>
          {siteTitle}
        </Link>
      </h1>
    </div>

    <div style={{ maxWidth: 960, display: `inline-block` }}>
      <h3 style={{ marginLeft: 395 }}>
        <Link to="/projetos/" style={{ color: `white`, textDecoration: `none` }}>
          Projetos
        </Link>
      </h3>
    </div>

    <div style={{ maxWidth: 960, display: `inline-block` }}>
      <h3 style={{ marginLeft: 15 }}>
        <Link to="/sobre/" style={{ color: `white`, textDecoration: `none` }}>
          Sobre
        </Link>
      </h3>
    </div>

    <div style={{ maxWidth: 960, display: `inline-block` }}>
      <h3 style={{ marginLeft: 15 }}>
        <Link to="/contato/" style={{ color: `white`, textDecoration: `none` }}>
          Contato
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
