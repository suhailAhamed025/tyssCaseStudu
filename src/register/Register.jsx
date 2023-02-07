import { Avatar, Button, Grid, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/system';

const pageStyle = { padding: 20, height: "70vh", width: 350, margin: "40px auto" }

function Register() {
    const [input, setInput] = useState({
        fname:'',
        lname:'',
        email:'',
        password:'',
        role:"admin"
        
    })

    const registerAcc=async()=>{
        let regtr= await axios.post('https://products-jwt.onrender.com/users/register',input)
        if(regtr.data.error){
            alert(regtr.data.message)
        }
        else{
        alert(regtr.data.message)
    }
}


  return (
    <div>
    <Grid>
    <Paper elevation={10} style={pageStyle}>
        <Grid align='center'>
            <Avatar><LockOpenOutlinedIcon /></Avatar>
            <h3>Register</h3>
        </Grid>
        <TextField label='First Name' placeholder='Enter your first name' fullWidth required sx={{marginBottom:1}} onChange={(e)=>{
            setInput({...input, fname: e.target.value})
        }}/>
        <TextField label='Last Name' placeholder='Enter your last name' fullWidth required sx={{marginBottom:1}} onChange={(e)=>{
            setInput({...input, lname: e.target.value})
        }}/>
        <TextField label='Email Id' placeholder='Enter your Email id' fullWidth required sx={{marginBottom:1}} onChange={(e)=>{
            setInput({...input, email: e.target.value})
        }}/>
        <TextField label='Password' type='password' placeholder='Enter your Password' fullWidth required sx={{marginBottom:1}} onChange={(e)=>{
            setInput({...input, password: e.target.value})
        }}/>
        <Stack marginBottom={2}>
        <Button variant='contained' fullWidth onClick={registerAcc}>Register</Button>
        </Stack>
        <Typography variant='p' gutterBottom>already have an account? <Link to='/'> Login</Link></Typography>
    </Paper>
</Grid>
    
    </div>
  )
}

export default Register