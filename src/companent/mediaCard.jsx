import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NearMe } from '@mui/icons-material';
import EditModal from './editModal';
const MediaCard = ({image, name, id, description, deleteUser, editUser}) => {
      //  edit modal
  const [editModal , setEditModal] = React.useState(false)
  const [editName ,setEditName] = React.useState("")
  const [editImage , setEditImage] = React.useState("")
  const [editDesc , setEditDesc] = React.useState("")
  const [idx , setIdx] = React.useState(null)
    return (
        <Card sx={{ maxWidth: 345 , marginBottom:"50px" }}>
          <CardMedia
            sx={{ height: 140 }}
            image={image}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">{description.slice(0,100)+"..."}</Typography>
          </CardContent>
          <CardActions>
            <Button sx={{background:"red", color:"white" , ":hover":{background:"#b11e1e"}}} size="small" onClick={()=> deleteUser(id)}>Delete</Button>
            <Button size="small" onClick={()=> {setEditModal(true) , setEditName(name) , setEditImage(image) , setEditDesc(description) , setIdx(id)}}>Edit</Button>
          </CardActions>
          <EditModal editUser={editUser} open={editModal} close={setEditModal} editName={editName} editDesc={editDesc} editImage={editImage} setEditDesc={setEditDesc} setEditImage={setEditImage} setEditName={setEditName} id={idx} />
        </Card>
      );
}

export default MediaCard
