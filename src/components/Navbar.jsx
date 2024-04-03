import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography variant='h5'>my app</Typography>
                <Button variant='contained'color='success'><Link to={'/'} style={{textDecoration:"none",color:"white"}}>Login</Link></Button>
                <Button variant='contained'color='error'><Link to={'/signup'}style={{textdecaration:"none",color:"white"}}>signup</Link>
                </Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar