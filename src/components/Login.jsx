
import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div >
        
        <Typography variant='h3'> login Form</Typography>
        <TextField label="enter the name" variant='outlined'/><br/>
        <TextField label="enter the password"variant='outlined'/><br/>

        <Button variant='contained' color='warning'>log in</Button>
    
    </div>
    
  )
}

export default Login