import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "../styles/normalize.css"
import "../styles/main.scss"

const Layout = ({ children }) => {

  return (
    <>
      <Header></Header>

      <main>
        {children}
      </main>

      <footer>

      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
