import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Registration = () => {
  return (
    <div style={{marginTop:"80px"}}>
<Typography variant='h3'> Registration Form</Typography>
        <TextField label="enter the name" variant='outlined'/><br/>
        <TextField label="enter the password"variant='outlined'/><br/>
        <TextField label="enter the phone number"variant='outlined'/><br/>
        <TextField label="enter address"variant='outlined'/><br/>
        <Button variant='contained' color='warning'>log in</Button>
    

    </div>
  )
}

export default Registration