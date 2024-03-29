import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Formik, Form, Field } from 'formik'
import { TextFormField } from '@components/ui/FormFields/TextFormField'
import SelectFormField from '@components/ui/FormFields/SelecFormField'
// import Card from '@components/ui/Card'
import * as yup from 'yup'
import { Typography, Card } from '@material-ui/core'
import Button from '@components/ui/Button/Button'
import { NextSeo } from 'next-seo'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(14, 0),
  },
  card: {
    padding: theme.spacing(5, 2),
    height: '100%',
    borderRadius: '50px',
  },
  button: {
    marginTop: theme.spacing(4),
  },
}))

const dropDownOption = [
  { label: 'Inquiry', value: 'inquiry' },
  {
    label: 'Recommendation',
    value: 'recommendation',
  },
  { label: 'Others', value: 'other' },
]

const schema = yup.object({
  name: yup.string().required('Name is required').min(3),
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
})

const Contact = () => {
  const classes = useStyles()

  return (
    <>
      <NextSeo
        title='Contact'
        description='Let me know if you have any feedback!'
      />
      <Grid
        container
        className={classes.root}
        justify='center'
        alignItems='center'
      >
        <Grid item component={Card} xs={10} className={classes.card}>
          <Grid container direction='column' alignItems='center'>
            <Typography variant='h3' component='h1' align='center' gutterBottom>
              Send Me a Message!
            </Typography>

            <Typography variant='h5' align='center' component='h2' gutterBottom>
              Inquiries, Feedback, Support
            </Typography>

            <Typography variant='body2' align='center' gutterBottom>
              Send me a message to get in touch. Always happy to receive info
              requests, hear user feedback or provide app support!
            </Typography>

            <Grid item xs={10}>
              <Formik
                initialValues={{
                  name: '',
                  email: '',
                  messagetype: '',
                  message: '',
                }}
                validationSchema={schema}
                onSubmit={(values) => {
                  const { name, email, messagetype, message } = values

                  window.open(
                    `mailto:lauwangtatbrian@gmail.com
                    ?subject=${messagetype.toUpperCase()} for brian-lau.ca
                    &body=Hi Brian
                    <br/>
                    <br/>
                    <br/> 
                    ${message} 
                    <br/>
                    <br/>
                    <br/>
                    ${name}
                    <br/> 
                    ${email}`
                  )
                }}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <Grid
                      container
                      justify='center'
                      alignItems='center'
                      spacing={2}
                    >
                      <Field
                        id='name'
                        name='name'
                        label='Your Name'
                        component={TextFormField}
                      />
                      <Field
                        id='email'
                        name='email'
                        label='Email'
                        component={TextFormField}
                      />
                      <Field
                        options={dropDownOption}
                        label='MessageType*'
                        name='messagetype'
                        component={SelectFormField}
                      />
                      <Field
                        id='message'
                        name='message'
                        label='Message'
                        component={TextFormField}
                        multiline
                        rows={4}
                      />
                      <Grid item xs={8}>
                        <Button
                          type='submit'
                          disabled={isSubmitting}
                          className={classes.button}
                        >
                          Submit
                        </Button>
                      </Grid>
                    </Grid>
                  </Form>
                )}
              </Formik>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Contact
