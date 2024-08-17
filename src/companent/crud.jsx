import { Button, Dialog, DialogTitle, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import MediaCard from './mediaCard'
import AddModal from './addModal'


const Crud = () => {
    const [data, setData] = useState([
        {
          "image": "/src/assets/Frame (2).png",
          "name": "Rachael Kemmer",
          "description": "Hic ratione animi occaecati ipsa ipsum delectus in ut. Commodi nemo perspiciatis repellat dolores consequuntur. Dolore quas dolorem consequatur. Ipsum doloremque ex aliquam temporibus iure sunt enim ullam doloribus. Deleniti repellat deleniti sed sit. Mollitia eos consequuntur nobis esse et ea ab dolorem modi.",
          "id": "19"
        },
        {
          "image": "/src/assets/Frame (2).png",
          "name": "Samantha Hodkiewicz",
          "description": "Hic sint incidunt. Expedita autem molestias nemo ab hic consequatur. Illum voluptate maxime.",
          "id": "21"
        },
        {
          "image": "/src/assets/Frame (2).png",
          "name": "Laura Wunsch",
          "description": "Laudantium similique animi possimus exercitationem quia a illum. Velit ipsa assumenda sed ab enim animi qui maxime ad. Similique facilis atque. Porro exercitationem odit praesentium architecto. Quaerat at temporibus veniam distinctio ratione.",
          "id": "22"
        },
        {
            "image": "/src/assets/Frame (2).png",
            "name": "Laura Wunsch",
            "description": "Laudantium similique animi possimus exercitationem quia a illum. Velit ipsa assumenda sed ab enim animi qui maxime ad. Similique facilis atque. Porro exercitationem odit praesentium architecto. Quaerat at temporibus veniam distinctio ratione.",
            "id": "465"
          },
          {
            "image": "/src/assets/Frame (2).png",
            "name": "Laura Wunsch",
            "description": "Laudantium similique animi possimus exercitationem quia a illum. Velit ipsa assumenda sed ab enim animi qui maxime ad. Similique facilis atque. Porro exercitationem odit praesentium architecto. Quaerat at temporibus veniam distinctio ratione.",
            "id": "489"
          }
      ])
      const [addModal, setAddModal] = useState(false)
      function deleteUser(id) {
          setData(data.filter((user) => user.id != id))
      }
    //    add 
    function addUser(image, name, description) {
        let newUser = {
            image: image,
            name: name,
            description: description,
            id: Math.random().toString(36).substr(2, 9)
        }
        data.push(newUser)
        setData(data)
        setAddModal(false)
    }
    //  edit
    function editUser(obj)
{
  setData(data.filter(el => 
  {
    if(el.id == obj.id)
    {
      el.name = obj.name,
      el.image = obj.image,
      el.description = obj.desc
    }
    return el
  }
  ))
}

//  search 

const [search, setSearch] = useState("")
  return (
  
    <div  className='mt-52 py-10 px-20'>
        <header className='flex justify-between items-center'>
          <TextField id="filled-search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          label="Search field"
          type="search"
          variant="filled"/>
          <Button onClick={()=> setAddModal(true)} variant="contained">+ Add Card</Button>
        </header>
        <div className='text-center flex flex-col justify-center items-center'>
        <img src="/src/assets/Group 27.png" alt="" />
        <p className='mt-14'>Благодаря надёжному строительству выигрывают все - муниципальные органы <br /> выполняют свои обязанности перед гражданами, инвесторы получают сертификаты <br /> своих проектов, а генеральные подрядчики получают повышенную репутацию.</p>
        </div>
     <section className='flex justify-between items-center flex-wrap  mt-20 gap-10'>
        {data.filter((elem) => elem.name.toLowerCase().trim().includes(search.toLowerCase())).map((elem) =>{
     return <MediaCard editUser={editUser} key={elem.id} id={elem.id} image={elem.image} name={elem.name} description={elem.description} deleteUser={deleteUser} />
        })}
     </section>
     <AddModal open={addModal} close={setAddModal}  addUser={addUser}/>
     
    </div>
    


  )
}

export default Crud
