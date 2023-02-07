import { Avatar, Button, Grid, Paper, TextField ,Typography} from '@mui/material'
import React, { useState } from 'react'
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import axios from 'axios';
import { Link, useNavigate} from 'react-router-dom';
import { Stack } from '@mui/system';
import '../App.css'



const pageStyle = { padding: 20, height: "50vh", width: 350, margin: "40px auto" }

function Login() {
    const navigate = useNavigate()
    const [input, setInput] = useState({
        email:'',
        password:''
    })

    const handelClick= async()=>{
        const res = await axios.post("https://products-jwt.onrender.com/users/login",input)
        let result = JSON.stringify(res.data.data.token)
        sessionStorage.setItem("token",result)
        if(res.data.error){
            alert('somthing went wrong')
        }
        else{
            navigate('/home')
        }

    }


    return (
        <div>
            <Grid>
                <Paper elevation={10} style={pageStyle}>
                    <Grid align='center'>
                        <Avatar><LockOpenOutlinedIcon /></Avatar>
                        <h3>Sign In</h3>
                    </Grid>
                    <TextField label='User Name' placeholder='Enter your user name' fullWidth required sx={{marginBottom:1}} onChange={(e)=>{
                        setInput({...input, email: e.target.value})
                    }}/>
                    <TextField label='Password' type='password' placeholder='Enter your Password' fullWidth required sx={{marginBottom:1}} onChange={(e)=>{
                        setInput({...input, password: e.target.value})
                    }}/>

                    <Stack marginBottom={2}>
                    <Button variant='contained' fullWidth onClick={handelClick}>Login</Button>
                    </Stack>
                    <Typography variant='subtitle1'>doesn't have an account <Link to='/register' >Register</Link></Typography>
                </Paper>
            </Grid>
              

        </div>
    )
}

export default Login