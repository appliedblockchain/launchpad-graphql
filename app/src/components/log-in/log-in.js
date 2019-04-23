import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import api from '../../utils/api'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';

const styles = {
  root: {
    display: 'flex',
    width: '100%',
    height: '100vh'
  },
  input: {
    width: '100%',
    marginBottom: '15px'
  },
  button: {
    width: '100%',
    color: '#f6f6f6',
    backgroundColor: '#6626b7'
  }
}

const Form = props => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const { classes } = props

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const token = await api.login(email, password)
      console.log('LOGIN TOKEN', token)

      localStorage.setItem('token', token)

      props.history.push('/posts')
    } catch (error) {

    }
  }

  return (
  <div className={classes.root}>
    <Grid container direction="row" justify="center" alignItems="center" spacing={16}>
      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <Grid item xs>
          <TextField
            className={classes.input}
            value={email}
            type="text"
            name="email"
            placeholder='Email'
            onChange={e => setEmail(e.target.value)} />
        </Grid>

        <Grid item xs>
          <TextField
            className={classes.input}
            value={password}
            type="password"
            name="password"
            placeholder='Password'
            onChange={e => setPassword(e.target.value)} />
        </Grid>

        <Grid item xs>
          <Button className={classes.button} type="submit">Log In</Button>
        </Grid>
      </form>
    </Grid>
  </div>
  )
}

const Login = props => { 
  console.log('LOGIN PROPS', props)
  return (
    <> 
      <Form {...props} />
    </>
  )
}

export default withRouter(withStyles(styles)(Login))
