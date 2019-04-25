import React, { useEffect, useState } from 'react'
import { withRouter, Redirect, Route } from 'react-router-dom'
import api from '../../utils/api'

const AuthRoute = props => {
  const lsToken = localStorage.getItem('token')
  const [ token ] = useState(lsToken)
  const [ verified, setVerified ] = useState(false)
  const [ loaded, setLoaded ] = useState(false)

  useEffect(() => {
    const fetch = async () => {
      if (!token) {
        return
      }
  
      const authenticated = await api.authenticate(token)

      setVerified(!!authenticated)
      setLoaded(true)
    }

    fetch()
  })

  if (!loaded) {
    return null
  }

  return (
    verified ? <Route {...props} /> : <Redirect to="/" />
  )
}

export default withRouter(AuthRoute)
