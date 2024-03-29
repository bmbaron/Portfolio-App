import { FC } from 'react'

import { createStyles, makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import Section1 from '@components/common/Landing/Section1'
import Section2 from '@components/common/Landing/Section2'
import Section3 from '@components/common/Landing/Section3'
import Section4 from '@components/common/Landing/Section4'
import Section5 from '@components/common/Landing/Section5'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  })
)

const Index: FC = () => {
  const classes = useStyles()

  return (
    <Grid
      container
      className={classes.root}
      justify='center'
      alignItems='center'
    >
      <Section1 />
      {/* <Section2 /> */}
      {/* <Section3 /> */}
      {/* <Section4 /> */}
      {/* <Section5 /> */}
    </Grid>
  )
}

export default Index
