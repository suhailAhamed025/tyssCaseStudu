import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, Grid, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import { submitData } from '../LocalStorageData';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function AddModal({ open, setOpenModal,display, setDisplay }) {
    const [addInput, setAddInput] = useState({
        SId:'',
        firstName:'',
        lastName:'',
        usn:'',
        branch:'',
        email:'',
    })

    

    const handleClose = () => {
        setOpenModal(false)
    }
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Stack marginBottom={2}>
                    <Typography  id="modal-modal-title" variant="h6" component="h1">
                        Add Student Details
                    </Typography>
                    </Stack>

                    <Stack spacing={1}>
                        <TextField variant='outlined' label='Student Id' placeholder='Studnet Id' required onChange={(e)=>{
                         setAddInput({...addInput, SId : e.target.value})
                      
                         }}/>  
                         <TextField variant='outlined' label='First Name' placeholder='First Name' required onChange={(e)=>{
                            setAddInput({...addInput, firstName : e.target.value})
                          
                         }}/>   
                         <TextField variant='outlined' label='Last Name' placeholder='Last Name' required onChange={(e)=>{
                            setAddInput({...addInput, lastName: e.target.value})
                         }}/>   
                         <TextField variant='outlined' label='USN' placeholder='USN' required onChange={(e)=>{
                            setAddInput({...addInput,usn: e.target.value})
                         }}/>   
                         <TextField variant='outlined' label='Branch' placeholder='Branch' required onChange={(e)=>{
                            setAddInput({...addInput,branch: e.target.value})
                         }}/>   
                         <TextField variant='outlined' label='Email' placeholder='Email' required onChange={(e)=>{
                            setAddInput({...addInput, email: e.target.value})
                         }}/>
                         <Button variant='contained' onClick={()=>{submitData(addInput) ;setDisplay(!display);handleClose()}}>Add</Button>   

                    </Stack>
                    
                </Box>
            </Modal>
        </div>
    )
}

export default AddModal