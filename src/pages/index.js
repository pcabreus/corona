import React, { useState } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import FacebookProvider, { EmbeddedPost } from 'react-facebook-sdk'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Box from '@material-ui/core/Box'
import AppBar from '@material-ui/core/AppBar'
import { makeStyles } from '@material-ui/core/styles'

function TabPanel (props) {
  const { children, value, index, ...other } = props

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}))

const IndexPage = () => {
  const classes = useStyles()
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Layout>
      <SEO title="Home"/>
      <Tabs value={value} onChange={handleChange} aria-label="simple tabs" indicatorColor="primary" centered={1}
            textColor="primary">
        <Tab label="Salsa" value={0}/>
        <Tab label="Bachata" value={1}/>
        <Tab label="Reguetón" value={2}/>
      </Tabs>
      <TabPanel value={value} index={0}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <FacebookProvider appId="774929489683795">
              <EmbeddedPost href="https://www.facebook.com/bailongu/videos/522198925349186/" width="auto" showText="0">
              </EmbeddedPost>
            </FacebookProvider>
          </Grid>
          <Grid item xs={12} md={4}>
            <FacebookProvider appId="774929489683795">
              <EmbeddedPost href="https://www.facebook.com/william.diaz.1293575/videos/1209554699390703/" width="auto"
                            showText="0">
              </EmbeddedPost>
            </FacebookProvider>
          </Grid>
          <Grid item xs={12} md={4}>
            <FacebookProvider appId="774929489683795">
              <EmbeddedPost href="https://www.facebook.com/cubansalsapower/videos/590063478260106/" width="auto"
                            showText="0">
              </EmbeddedPost>
            </FacebookProvider>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Coming soon
      </TabPanel>
      <TabPanel value={value} index={2}>
        Coming soon
      </TabPanel>
    </Layout>
  )
}
export default IndexPage
