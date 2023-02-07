import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Stack, TextField } from '@mui/material';
import { updateOnclick } from '../LocalStorageData';

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

function EditModal({ open, setEditModal,selectedData,setDisplay,display}) {

    const [editInput, setEditInput] = useState(selectedData.data)
    

    const {index}=selectedData

    
   
    useEffect(() => {
        setEditInput({...selectedData.data})
    }, [selectedData.data])

  
    

    let handleClose = () => {
        setEditModal(false)
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
                        <Typography id="modal-modal-title" variant="h6" component="h1">
                            Edit Student Details
                        </Typography>
                    </Stack>

                    <Stack spacing={1}>
                        <TextField variant='outlined' label='Student Id' placeholder='Studnet Id' value={editInput.SId} required onChange={(e) => {
                            setEditInput({ ...editInput, SId: e.target.value })
                            console.log(editInput.SId);

                        }} />
                        <TextField variant='outlined' label='First Name' placeholder='First Name' value={editInput.firstName} required onChange={(e) => {
                            setEditInput({ ...editInput, firstName: e.target.value })

                        }} />
                        <TextField variant='outlined' label='Last Name' placeholder='Last Name' value={editInput.lastName} required onChange={(e) => {
                            setEditInput({ ...editInput, lastName: e.target.value })
                        }} />
                        <TextField variant='outlined' label='USN' placeholder='USN' value={editInput.usn} required onChange={(e) => {
                            setEditInput({ ...editInput, usn: e.target.value })
                        }} />
                        <TextField variant='outlined' label='Branch' placeholder='Branch' value={editInput.branch} required onChange={(e) => {
                            setEditInput({ ...editInput, branch: e.target.value })
                        }} />
                        <TextField variant='outlined' label='Email' placeholder='Email' value={editInput.email} required onChange={(e) => {
                            setEditInput({ ...editInput, email: e.target.value })
                        }} />
                        <Button variant='contained' onClick={()=> {updateOnclick(editInput,index);handleClose();setDisplay(!display)}}>Update</Button>

                    </Stack>

                </Box>
            </Modal>
        </div>
    )
}

export default EditModal