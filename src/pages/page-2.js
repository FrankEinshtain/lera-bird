import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"

const SecondPage = () => (
  <Layout page="second">
    <div className="inner">
      <h1>second page in underconstruction</h1>
      {/* <p>underconstruction</p> */}
      <br />
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default SecondPage
