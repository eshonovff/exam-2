import { Button, Dialog, DialogTitle, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'

const AddModal = ({open,close, addUser}) => {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
  return (
    <Dialog open={open} onClose={close} >
        <div className='flex flex-col justify-center p-11 w-96'>
        <TextField id="standard-basic" sx={{marginBottom:"30px"}} value={image} onChange={(e) => setImage(e.target.value)} label="Image URL" variant="standard" />
        <TextField id="standard-basic" sx={{marginBottom:"30px"}} value={name} onChange={(e) => setName(e.target.value)} label="Enter Name" variant="standard" />
        <TextField id="standard-basic" sx={{marginBottom:"30px"}} value={description} onChange={(e) => setDescription(e.target.value)} label="Enter Description" variant="standard" />
        <div className='flex justify-between'>
        <Button onClick={()=> addUser(image, name, description)} variant="contained" sx={{width:"45%"}}>Add Card</Button>
        <Button onClick={() => close()} variant="contained" sx={{width:"45%" , background:"red" , ":hover":{background:"#b11e1e"}}}>Cancel</Button>
        </div>
        </div>
        
     </Dialog>
  )
}

export default AddModal
