import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

// TODO: deixar o header responsivo
const Header = ({ siteTitle }) => (
  <header style={{ background: `linear-gradient(#0074D9, #33a0ff)`, marginBottom: `2.2%`,
                paddingTop: `1%`, paddingBottom: `0%`, paddingLeft: `0%`, paddingRight: `0%` }}>
    <div style={{ marginLeft: `16%`, display: `inline-block` }}>
      <h1>
        <Link to="/" style={{ fontSize: `32px`, color: `white`, textDecoration: `none` }}>
          <p class="headerP">{siteTitle}</p>
        </Link>
      </h1>
    </div>
    <div style={{ marginLeft: `37%`, display: `inline-block` }}>
      <h3>
        <Link to="/projetos/" style={{ fontWeight: 450, color: `white`, textDecoration: `none` }}>
          <p class="headerP">Projetos</p>
        </Link>
      </h3>
    </div>
    <div style={{ marginLeft: `1%`, display: `inline-block` }}>
      <h3>
        <Link to="/sobre/" style={{ fontWeight: 450, color: `white`, textDecoration: `none` }}>
          <p class="headerP">Sobre</p>
        </Link>
      </h3>
    </div>
    <div style={{ marginLeft: `1%`, display: `inline-block` }}>
      <h3>
        <Link to="/contato/" style={{ color: `white`, fontWeight: 450, textDecoration: `none` }}>
          <p class="headerP">Contato</p>
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
//         maxWclassth: 960,
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
