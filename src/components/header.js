import PropTypes from 'prop-types'
import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Hidden from '@material-ui/core/Hidden'

const useStyles = makeStyles(theme => ({
  toolbar: {
    backgroundColor: theme.palette.background.paper,
    textTransform: 'uppercase',
  },
  toolbarTitle: {
    flex: 1,
    margin: '0 1rem',
    padding: '.3rem 1rem',
    fontFamily: 'Montserrat',
    lineHeight: '50px',
    fontSize: '2rem',
  },
  toolbarImg: {
    maxWidth: '100%',
    height: 'auto',
    maxHeight: '50px',
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
    textTransform: 'uppercase',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    textDecoration: 'none',
    color: theme.palette.text.primary,
    fontFamily: 'Montserrat',
  },
  toolbarSecondaryNav: {
    padding: theme.spacing(1),
    flexShrink: 0,
    textDecoration: 'none',
    color: theme.palette.text.primary,
    fontFamily: 'Montserrat',
    fontSize: '.7rem!important',
  },
  toolbarSlogan: {
    fontSize: '1rem',
    verticalAlign: 'middle',
    lineHeight: '50px',
    color: theme.palette.text.secondary,
    marginLeft: '1rem'
  }
}))

const Header = () => {
  const classes = useStyles()

  return (
    <Toolbar className={classes.toolbar}>
      {/*<Button variant="outlined" size="small">*/}
      {/*  Sign up*/}
      {/*</Button>*/}
      <Typography
        component="h2"
        variant="h4"
        color="inherit"
        align="center"
        gutterBottom
        noWrap
        className={classes.toolbarTitle}
      >
        <Link to={'/'} className={classes.toolbarLink}>
          {/*<img src={titleLogo} alt="Guaranchando" className={classes.toolbarImg}/>*/}
          ONDanza
        </Link>
        <Hidden xsDown>
          <small className={classes.toolbarSlogan}>Online Dance Platform</small>
        </Hidden>
      </Typography>

      {/*<IconButton>*/}
      {/*  <SearchIcon/>*/}
      {/*</IconButton>*/}
      {/*<Button variant="outlined" size="small">*/}
      {/*  Sign up*/}
      {/*</Button>*/}
    </Toolbar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
