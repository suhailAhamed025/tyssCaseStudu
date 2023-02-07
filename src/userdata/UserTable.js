import { Button, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import AddModal from '../addmodal/AddModal';
import { deletOnclick } from '../LocalStorageData';
import EditModal from '../editmodal/EditModal';


function UserTable() {

const [studentData, setStudentData] = useState([{ }])
const [openModal, setOpenModal] = useState(false)
const [editModal, setEditModal] = useState(false)
// const [deleteModal, setDeleteModal] = useState(false)
const [selectedData, setSelectedData] = useState({data:{},index:""})
const [display, setDisplay] = useState(false)

var student

useEffect(() => {
  const displayData=localStorage.getItem('data')
    if (displayData==null) {
        alert('data not found')
        
    }
    else{
         student=JSON.parse(displayData)
        
        setStudentData(student)
    }
},[display])


const navigate = useNavigate()

useEffect(() => {
    if (!sessionStorage.getItem('token')) {
        navigate('/')
    }

  }
, [])

const openAdd=()=>{
    setOpenModal(true)
}

const editOnclick=()=>{
    setEditModal(true)
}

const handelLogout=()=>{
    sessionStorage.removeItem('token')
    navigate('/')
}

// const alertDelete=()=>{
//     setDeleteModal(true)
// }

    return (
        <div>
            <Stack alignItems={'end'} margin={2}>
            <Button variant='contained' color='info' onClick={handelLogout}>LogOut</Button>
            </Stack>
            <Container>
            <TableContainer>
            <Stack alignItems={'end'} margin='10px'>
            <Button variant='contained' startIcon={<AddIcon/>} onClick={openAdd}>add</Button>
            </Stack>
                <Table>
                    <TableHead>
                        <TableRow>  
                            <TableCell variant='h2'>Student Id</TableCell>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>USN</TableCell>
                            <TableCell>Branch</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {studentData.map((e ,i)=>{
                            return( 
                        <TableRow key={e.SId}>
                            <TableCell>{e.SId}</TableCell>
                            <TableCell>{e.firstName}</TableCell>
                            <TableCell>{e.lastName}</TableCell>
                            <TableCell>{e.usn}</TableCell>
                            <TableCell>{e.branch}</TableCell>
                            <TableCell>{e.email}</TableCell>
                            <TableCell>
                            <Stack direction={'row'} spacing={1}>
                            <Button variant='contained' size='small' startIcon={<EditIcon/>} color='secondary' onClick={()=>{editOnclick()
                                setSelectedData({data:e, index:i})}
                            }>edit</Button>
                            <Button variant='contained' size='small' startIcon={<DeleteIcon/>} color='error' onClick={()=>{ deletOnclick(i); setDisplay(!display)}}>delete</Button>
                            </Stack>
                            </TableCell>
                        </TableRow>
    )})}
                    </TableBody>
                </Table>
            </TableContainer>
            </Container>
           {openModal && <AddModal open={openModal} setOpenModal={setOpenModal} setDisplay={setDisplay} display={display}/>}
           {editModal && <EditModal open={editModal} setEditModal={setEditModal} studentData={studentData} selectedData={selectedData} setDisplay={setDisplay} display={display}/>}
        </div>
    )
}

export default UserTable