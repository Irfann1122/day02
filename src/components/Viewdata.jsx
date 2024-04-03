import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'

const Viewdata = () => {
    var [users,setusers] = useState([])
    useEffect(()=>{
        // axios.get("https://jsonplaceholder.typicode.com/users")
        axios.get("https://api.github.com/users")
        .then((res)=>{
            console.log(res.data)
            setusers(res.data)
        })
        .catch(err=>console.log(err))
    },[])
    
  return (
    <div>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <tableCell>Email</tableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {users.map((val,i)=>{
                    return(
                        <TableRow>
                            <TableCell>{val.name}</TableCell>
                            {/* <TableCell>{val.username}</TableCell> */}
                            <TableCell><img height={"100px"} src= {val.avatar_url} alt='image'/></TableCell>
                            <TableCell>{val.email}</TableCell>
                        </TableRow>
                    )
                })}
            </TableBody> 
        </Table>
    </div>
  )
}

export default Viewdata