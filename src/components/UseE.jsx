import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const UseE = () => {
var [name,setName] =useState()
const changeHname =()=>{
    setName("Home")
}
const changeGname =()=>{
    setName("Gallery")
}
const changeCname =()=>{
    setName("Contact")
}
useEffect(()=>{
    changeGname()
},[])
  return (
    <div>
<Typography>welocome to {name}</Typography>
<Button variant='contained'color='error' onClick={changeHname}>home</Button>
<Button variant='contained'color='success' onClick={changeGname}>gallery</Button>
<Button variant='contained'color='warning' onClick={changeCname}>contact</Button>

    </div>
  )
}

export default UseE