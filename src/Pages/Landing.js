import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import Section1 from './Landing/Section1'
import Section2 from './Landing/Section2'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    [theme.breakpoints.up('md')]: {
      maxWidth: theme.breakpoints.width('lg'),
      margin: '0 auto',
    },
  },
}))

const Landing = () => {
  const classes = useStyles()

  return (
    <Grid
      container
      className={classes.root}
      justify='center'
      alignItems='center'
    >
      <Section1 />
      <Section2 />
    </Grid>
  )
}

export default Landing
