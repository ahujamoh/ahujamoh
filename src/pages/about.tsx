import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Image from '../components/Image'
import SEO from '../components/SEO'
import Container from '../components/Container'
import Section from '../components/Section'

const AboutPage: React.FC = () => (
  <Layout>
    <SEO title="About Richard" />
    <Section style={{ position: 'relative', padding: '6rem 0' }}>
      <Container>
        <h1>Hi people</h1>
        <p>Welcome to about page</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <Link to="/about/">Go to page 2</Link>
      </Container>
    </Section>
  </Layout>
)

export default AboutPage
