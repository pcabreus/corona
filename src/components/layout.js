import React from 'react'
import PropTypes from 'prop-types'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Image from '../components/image'
import Typography from '@material-ui/core/Typography'
import Header from './header'

const Layout = ({ children }) => {
  return (
    <>
      <CssBaseline>
        <Header/>
        <Container maxWidth="lg" style={{ minHeight: '90vh', paddingTop: '3rem' }}>
          <main>{children}</main>

          <Typography align="center">
            <a href="https://www.facebook.com/PositibeLabs/" target="_blank">Contacto en @positibelabs</a>
          </Typography>
        </Container>
        <footer style={{ textAlign: `center`, marginTop: '5rem' }}>
          © {new Date().getFullYear()}, Built by <a href="https://www.positibelabs.com">PositibeLabs</a>
          <div style={{ maxWidth: `100px`, marginBottom: `1.45rem`, marginLeft: 'auto', marginRight: 'auto' }}>
            <Image/>
          </div>

        </footer>
        {/*<ToolbarActions/>*/}
      </CssBaseline>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
