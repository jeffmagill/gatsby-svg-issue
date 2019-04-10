import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ResearchIcon from '../images/research.svg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    <hr/>
    <code>
      &lt;ResearchIcon/&gt;:
    </code>
    <div>
      <ResearchIcon/>
    </div>

    <hr/>
    <code>
      &#123;ResearchIcon()&#125;:
    </code>
    <div>
      {ResearchIcon()}
    </div>

  </Layout>
)

export default IndexPage
