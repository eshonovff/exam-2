import { Button, ButtonGroup, Dialog, TextField } from "@mui/material";
import React, { useState } from "react";

const EditModal = ({ open, close, editName , editImage , editDesc , setEditName , setEditImage , setEditDesc  , editUser , id}) => {
  return (
    <div>
      <Dialog open={open} onClose={close}>
        <div className="p-[50px] w-[500px]">
          <h1 className="py-[20px] text-[30px] font-[800] text-center">
            Add New User
          </h1>
          <TextField
            id="standard-basic"
            sx={{ marginBottom: "30px", width: "100% " }}
            value={editImage}
            onChange={(e) => setEditImage(e.target.value)}
            label="IMAGE URL"
            variant="standard"
          />
          <TextField
            id="standard-basic"
            sx={{ marginBottom: "30px", width: "100% " }}
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            label="Enter Name"
            variant="standard"
          />
          <TextField
            id="standard-basic"
            sx={{ marginBottom: "30px", width: "100% " }}
            value={editDesc}
            onChange={(e) => setEditDesc(e.target.value)}
            label="Enter description"
            variant="standard"
          />
          <ButtonGroup
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
            disableElevation
            variant="contained"
            aria-label="Disabled button group"
          >
            <Button
              sx={{ width: "45%", borderRadius: "10px" }}
              onClick={() => {editUser({id:id , name:editName, desc:editDesc , image:editImage}), close(false)}}
            >
              Save User
            </Button>
            <Button
              sx={{
                width: "45%",
                borderRadius: "10px",
                background: "red",
                ":hover": { backgroundColor: "#c41a1a" },
              }}
              onClick={() => close()}
            >
              Cancel
            </Button>
          </ButtonGroup>
        </div>
      </Dialog>
    </div>
  );
};

export default EditModal;
