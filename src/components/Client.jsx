import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  AppBar,
  Box,
  Button,
  Container,
  Stack,
  Toolbar,
  Typography,
  Modal // Import the Modal component
} from "@mui/material";


const rows = [
  {
    id: 1,
    requestedby: 'omkar',
    subject: 'laptop maintenance',
    status: 'open',
    createdate: '22-03-2024',
    duedate: '23-02-2024'
  },
  {
    id: 2,
    requestedby: 'Navin',
    subject: 'Network issue',
    status: 'closed',
    createdate: '22-03-2024',
    duedate: '23-02-2024'
  }
];

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

export default function Client() {

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);
  const columns = [
    {
      field: "id",
      width: 50,
      renderHeader: () => (
        <h4>
          <strong>{"Id"}</strong>
        </h4>
      ),
    },
    {
      field: "requestedby",
      width: 250,
      renderHeader: () => (
        <h4>
          <strong>{"RequestedBy"}</strong>
        </h4>
      ),
    },
    {
      field: "subject",
      width: 250,
      renderHeader: () => (
        <h4>
          <strong>{"Subject"}</strong>
        </h4>
      ),
    },
    {
      field: "status",
      width: 240,
      renderHeader: () => (
        <h4>
          <strong>{"Status"}</strong>
        </h4>
      ),
      renderCell: (params) => (
        <Button size="small" variant="outlined" onClick={() => params.value === 'open' && handleOpenBtn()}>
        {params.value === 'open' ? 'Open' : 'Close'}
      </Button>
      
      ),
    },
    {
      field: "createdate",
      width: 230,
      renderHeader: () => (
        <h4>
          <strong>{"Create Date"}</strong>
        </h4>
      ),
    },
    {
      field: "duedate",
      width: 230,
      renderHeader: () => (
        <h4>
          <strong>{"Due Date"}</strong>
        </h4>
      ),
    },
  ];
const handleOpenBtn=()=>{
  handleOpen()
}  

  return (
    <>
      <Box mx={1}>
        <Box
          sx={{
            mt: 2,
            height: 450,
            border: 1,
          }}
        >
          <DataGrid
            getRowId={(row) => row.id}
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            pageSizeOptions={[10]}
            disableRowSelectionOnClick
          />
        </Box>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
