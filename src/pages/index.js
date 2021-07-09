import * as React from "react"
import Layout from "../components/Layout"
import Viewer from "../components/Viewer"

const IndexPage = () => {
  return (
    <Layout page="home">
      <div className="inner">
        <Viewer />
      </div>
    </Layout>
  )
}

export default IndexPage
