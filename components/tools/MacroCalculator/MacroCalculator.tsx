import { Grid, makeStyles, Theme, Input } from '@material-ui/core'

import React, { useState } from 'react'

import Slider from './Slider'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(3),
  },
}))

const MacroCalculator = () => {
  const [kcal, setKcal] = useState<string>('2150')
  const cn = useStyles()

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKcal(event.target.value === '' ? '' : event.target.value)
  }

  const handleBlur = () => {
    if (Number(kcal) < 0) {
      setKcal('')
    }
  }

  return (
    <Grid container spacing={2} className={cn.root}>
      <Grid item xs={12}>
        <Input
          value={kcal}
          onChange={handleInputChange}
          onBlur={handleBlur}
          placeholder='Enter your daily calories (TDEE)'
          type='number'
        />
        Kcal
      </Grid>
      <Grid item xs={12}>
        <Slider title='Protein' defaultPercentage={30} kcal={Number(kcal)} />
      </Grid>

      <Grid item xs={12}>
        <Slider title='Carbs' defaultPercentage={40} kcal={Number(kcal)} />
      </Grid>

      <Grid item xs={12}>
        <Slider title='Fat' defaultPercentage={30} kcal={Number(kcal)} />
      </Grid>
    </Grid>
  )
}

export default MacroCalculator
