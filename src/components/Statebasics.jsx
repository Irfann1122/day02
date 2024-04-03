import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const Statebasics = () => {
    // var fname="irfu"
    var [name,setName] = useState("irfan")
    var [value,setValue] = useState()
const changeName = ()=>{
    console.log("clicked")
    setName(value)
}
const inputHandler =(e) =>{
    console.log(e.target.value)
    setValue(e.target.value)
}
  return (
    <div>
        <Typography variant='h4'>welcome {name}</Typography>
        <TextField label="enter name" variant='outlined'onChange={inputHandler}/><br/>
        <Button variant='contained'color='error' onClick={changeName}>change</Button>

    </div>
  )
}

export default Statebasics