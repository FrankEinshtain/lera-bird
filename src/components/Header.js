import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle, page }) => {
  return (
    <header className="header">
      <div className="inner">
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>
        {page === "home" && (
          <p>
            <Link to="/page-2/">Go to page 2</Link> <br />
          </p>
        )}
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
