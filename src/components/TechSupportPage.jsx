// import * as React from "react";
// import { DataGrid } from "@mui/x-data-grid";
// import { Controller, useForm } from "react-hook-form";
// import Chip from "@mui/material/Chip";

// import {
//   AppBar,
//   Box,
//   Button,
//   Container,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   DialogTitle,
//   FormControl,
//   Grid,
//   InputLabel,
//   MenuItem,
//   Modal,
//   Select,
//   Stack,
//   TextField,
//   Toolbar,
//   Typography,
// } from "@mui/material";
// import DrawerAppBar from "./DrawerAppBar";
// import { useEffect } from "react";
// import axios from "axios";

// const columns = [
//   {
//     field: "sr",
//     width: 160,

//     renderHeader: () => (
//       <h4>
//         <strong>{"sr"}</strong>
//       </h4>
//     ),
//   },
//   {
//     field: "ticketid",
//     width: 250,
//     renderHeader: () => (
//       <h4>
//         <strong>{"Ticket Id"}</strong>
//       </h4>
//     ),
//   },
//   {
//     field: "title",
//     width: 240,
//     renderCell: (params) => (
//       <div style={{ fontWeight: "bold" }}>{params.row.title}</div>
//     ),
//     renderHeader: () => (
//       <h4>
//         <strong>{"Title"}</strong>
//       </h4>
//     ),
//   },
//   {
//     field: "date",
//     width: 250,
//     renderHeader: () => (
//       <h4>
//         <strong>{"Date"}</strong>
//       </h4>
//     ),
//   },
//   {
//     field: "status",
//     width: 250,
//     renderCell: (params) => {
//       return (
//         <Chip
//           label={params.row.status}
//           style={{
//             color:
//               params.row.status === "open"
//                 ? "green"
//                 : params.row.status === "close"
//                 ? "blue"
//                 : "red",
//           }}
//         ></Chip>
//       );
//     },

//     renderHeader: () => (
//       <h4>
//         <strong>{"Status"}</strong>
//       </h4>
//     ),
//   },
// ];

// // const sample = [
// //   // { sr: 1, ticketid: 2, title: "test", date: "12/02/2000", status: "open" },
// //   // { sr: 2, ticketid: 2, title: "test", date: "12/02/2000", status: "closed" },
// // ];

// export default function Support() {
//   const [open, setOpen] = React.useState(false);
//   const [rows, setRows] = React.useState([]);
//   const [selectedRow, setSelectedRow] = React.useState(null);
//   const [openDialog, setOpenDialog] = React.useState(false);
//   const tottaltickestss = rows.length;
//   const closedTicket = rows.filter((row) => row.status === "close").length;
//   // console.log("closedTicket", closedTicket);
//   // console.log("tottaltickestss");

//   const {
//     control,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   useEffect(() => {
//     const fetchData = async () => {
//       const resp = await axios.get("http://localhost:3500/ticketData");
//       // console.log("resp", resp?.data);
//       setRows(resp?.data);
//     };
//     fetchData();
//   }, []);

//   const handleOpen = () => {
//     setOpen(true);
//     reset();
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleRowClick = (params) => {
//     setSelectedRow(params.row);
//     setOpenDialog(true);
//   };

//   const onSubmit = (formData) => {
//     const newTicketId = rows.length + 1;
//     const newTicket = {
//       sr: newTicketId,
//       ticketid: `#${newTicketId}`,
//       title: formData.title,
//       date: new Date().toLocaleDateString(),
//       status: formData.status,
//     };

//     setRows((prevRows) => [...prevRows, newTicket]);
//     // localStorage.setItem("userTickets", JSON.stringify([...rows, newTicket]));
//     handleClose();
//   };
//   return (
//     <>
//       {/* <DrawerAppBar
//         totalticketss={tottaltickestss}
//         closedTicket={closedTicket}
//       /> */}
//       <Box mx={1}>
//         <Container>

//           <Box
//             sx={{
//               mt: 2,
//               height: 450,
//               width: "100%",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               // border: 1,
//             }}
//           >
//             <DataGrid
//               getRowId={(row) => row.sr}
//               rows={rows}
//               columns={columns}
//               onRowClick={handleRowClick}
//               initialState={{
//                 pagination: {
//                   paginationModel: {
//                     pageSize: 10,
//                   },
//                 },
//               }}
//               pageSizeOptions={[10]}
//               disableRowSelectionOnClick
//             />
//           </Box>
//         </Container>

//         <Dialog
//           open={open}
//           onClose={handleClose}
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             "& .MuiDialog-paper": {
//               borderRadius: "15px",
//               border: "2px solid",
//               boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
//               backgroundColor: "#F4F5F7 ",
//             },
//           }}
//         >
//           <DialogTitle
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               color: "black",
//             }}
//           >
//             Ticket
//           </DialogTitle>
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <DialogContent>
//               <Grid container spacing={2}>
//                 <Grid item xs={12} lg={12}>
//                   <Controller
//                     name="title"
//                     control={control}
//                     defaultValue=""
//                     rules={{ required: "title Name is required" }}
//                     render={({ field }) => (
//                       <TextField
//                         {...field}
//                         label="title"
//                         size="small"
//                         autoComplete="off"
//                         fullWidth
//                       />
//                     )}
//                   />
//                 </Grid>
//                 <Grid item xs={12} lg={12}>
//                   <Controller
//                     name="description"
//                     control={control}
//                     defaultValue=""
//                     rules={{ required: "title Name is required" }}
//                     render={({ field }) => (
//                       <TextField
//                         {...field}
//                         label="description"
//                         multiline
//                         rows={2}
//                         autoComplete="off"
//                         fullWidth
//                         inputProps={{ maxLength: 300 }}
//                       />
//                     )}
//                   />
//                 </Grid>
//                 <Grid item xs={12} lg={12}>
//                   <Stack direction={"row"} spacing={2}>
//                     {/* <Controller
//                         name="status"
//                         control={control}
//                         defaultValue=""
//                         rules={{ required: "Status is required" }}
//                         render={({ field }) => (
//                           <FormControl fullWidth size="small">
//                             <InputLabel id="status-label">status</InputLabel>
//                             <Select
//                               {...field}
//                               labelId="status-label"
//                               label="Status"
//                               autoComplete="off"
//                             >
//                               <MenuItem value="open">Open</MenuItem>
//                               <MenuItem value="close">Close</MenuItem>
//                               <MenuItem value="permanently close">
//                                 Permanently Close
//                               </MenuItem>
//                             </Select>
//                           </FormControl>
//                         )}
//                       /> */}
//                     <Controller
//                       name="date"
//                       control={control}
//                       defaultValue=""
//                       render={({ field }) => (
//                         <TextField
//                           {...field}
//                           size="small"
//                           fullWidth
//                           type="date"
//                           label="Date"
//                           InputLabelProps={{
//                             shrink: true,
//                           }}
//                         />
//                       )}
//                     />
//                   </Stack>
//                 </Grid>
//               </Grid>
//             </DialogContent>

//             <DialogActions>
//               <Button
//                 autoFocus
//                 variant="contained"
//                 type="submit"
//                 color="primary"
//               >
//                 Save
//               </Button>
//               <Button
//                 onClick={handleClose}
//                 variant="contained"
//                 type="submit"
//                 color="primary"
//               >
//                 Cancel
//               </Button>
//             </DialogActions>
//           </form>
//         </Dialog>

//         <Dialog
//           open={openDialog}
//           onClose={() => setOpenDialog(false)}
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             "& .MuiDialog-paper": {
//               borderRadius: "15px",
//               border: "2px solid",
//             },
//           }}
//         >
//           <DialogContent>
//             {/* Display details of the selected row */}
//             {selectedRow && (
//               <Grid container spacing={2} mt={0}>
//                 <Grid item xs={12}>
//                   <Stack direction={"row"} spacing={2}>
//                     <Typography variant="body1">
//                       title: {selectedRow.title}
//                     </Typography>
//                     <Typography variant="body1">
//                       ticketid: {selectedRow.ticketid}
//                     </Typography>
//                   </Stack>
//                   <Stack direction={"row"} spacing={2}>
//                     <Typography variant="body1">
//                       date: {selectedRow.date}
//                     </Typography>
//                     <Typography variant="body1">
//                       status: {selectedRow.status}
//                     </Typography>
//                   </Stack>
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField label="reply" fullWidth rows={3} />
//                 </Grid>
//               </Grid>
//             )}
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={() => setOpenDialog(false)} variant="contained">
//               Close
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </Box>
//     </>
//   );
// }

// {
//   /* <Grid item xs={12}>
//                   <Stack direction={"row"} spacing={2}>
//                     <TextField
//                       label="date"
//                       value={selectedRow.date}
//                       size="small"
//                       fullWidth
//                       InputProps={{ readOnly: true }}
//                       sx={{ mb: 1 }}
//                     />
//                     <TextField
//                       label="status"
//                       value={selectedRow.status}
//                       size="small"
//                       fullWidth
//                       InputProps={{ readOnly: true }}
//                       sx={{ mb: 1 }}
//                     />
//                   </Stack>
//                 </Grid> */
// }
import * as React from "react";
import {DataGrid} from "@mui/x-data-grid";
import {Controller, useForm} from "react-hook-form";
import Chip from "@mui/material/Chip";

import {
  AppBar,
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import DrawerAppBar from "./DrawerAppBar";
// import DrawerAppBar from "./DrawerAppBar";

const columns = [
  {
    field: "sr",
    width: 160,
    renderHeader: () => (
      <h4>
        <strong>{"sr"}</strong>
      </h4>
    ),
  },
  {
    field: "ticketid",
    width: 250,
    renderHeader: () => (
      <h4>
        <strong>{"Ticket Id"}</strong>
      </h4>
    ),
  },
  {
    field: "title",
    width: 240,
    renderCell: (params) => (
      <div style={{fontWeight: "bold"}}>{params.row.title}</div>
    ),
    renderHeader: () => (
      <h4>
        <strong>{"Title"}</strong>
      </h4>
    ),
  },
  {
    field: "date",
    width: 250,
    renderHeader: () => (
      <h4>
        <strong>{"Date"}</strong>
      </h4>
    ),
  },
  {
    field: "status",
    width: 250,
    renderCell: (params) => {
      return (
        <Chip
          label={params.row.status}
          style={{
            color:
              params.row.status === "open"
                ? "green"
                : params.row.status === "close"
                ? "blue"
                : "red",
          }}
        ></Chip>
      );
    },

    renderHeader: () => (
      <h4>
        <strong>{"Status"}</strong>
      </h4>
    ),
  },
];

export default function AdminPage() {
  const [open, setOpen] = React.useState(false);
  const [rows, setRows] = React.useState([]);
  const [selectedRow, setSelectedRow] = React.useState(null);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [save, setSave] = React.useState();
  const tottaltickestss = rows.length;
  const closedTicket = rows.filter((row) => row.status === "close").length;
  console.log("closedTicket", closedTicket);
  console.log("tottaltickestss");
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm();

  const baseUrl = "{{baseurl}}"; // Replace "{{baseurl}}" with your actual base URL

  const handleOpen = () => {
    setOpen(true);
    reset();
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleRowClick = (params) => {
    setSelectedRow(params.row);
    setOpenDialog(true);
  };

  const onSubmit = (formData) => {
    const newTicketId = rows.length + 1;
    const newTicket = {
      sr: newTicketId,
      ticketid: `#${newTicketId}`,
      title: formData.title,
      description: formData.description,
      date: formData.date,
      status: formData.status,
    };

    setRows((prevRows) => [...prevRows, newTicket]);
    handleClose();
  };

  // const sample = [
  //   // { sr: 1, ticketid: 2, title: "test", date: "12/02/2000", status: "open" },
  //   // { sr: 2, ticketid: 2, title: "test", date: "12/02/2000", status: "closed" },
  // ];

  // export default function UserTicket() {
  //   const [open, setOpen] = React.useState(false);
  //   const [rows, setRows] = React.useState([]);
  //   const [selectedRow, setSelectedRow] = React.useState(null);
  //   const [openDialog, setOpenDialog] = React.useState(false);
  //   const [save,setSave] = React.useState()
  //   const tottaltickestss = rows.length;
  //   const closedTicket = rows.filter(row => row.status ==='close').length;
  //   console.log('closedTicket',closedTicket);
  //   console.log('tottaltickestss');
  //   const {
  //     control,
  //     handleSubmit,
  //     reset,
  //     formState: { errors },
  //   } = useForm();

  //   const handleOpen = () => {
  //     setOpen(true);
  //     reset();
  //   };
  //   const handleClose = () => {
  //     setOpen(false);
  //   };
  //   const handleRowClick = (params) => {
  //     // console.log(params);
  //     setSelectedRow(params.row);
  //     setOpenDialog(true);
  //   };

  //   const onSubmit = (formData) => {
  //     const newTicketId = rows.length + 1;
  //     const newTicket = {
  //       sr: newTicketId,
  //       ticketid: `#${newTicketId}`,
  //       title: formData.title,
  //       description: formData.description,
  //       date: formData.date,
  //       status: formData.status,
  //     };

  //     setRows((prevRows) => [...prevRows, newTicket]);
  //     handleClose();
  //   };
  return (
    <>
      <Box totalticketss={tottaltickestss} />
      <Typography
        fontStyle={"initial"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        fontSize={34}
      >
        Tech Support
      </Typography>
      <Box mx={1}>
        <Container>
          <Box textAlign={"end"} mb={0.5} borderRadius={3} mt={2}>
            <Button
              mt={2}
              variant="contained"
              ml={-3}
              sx={{bgcolor: "#C75BED"}}
              onClick={handleOpen}
              color="info"
            >
              Ticket support
            </Button>
          </Box>

          <Box
            sx={{
              mt: 2,
              height: 450,
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // border: 1,
            }}
          >
            <DataGrid
              getRowId={(row) => row.sr}
              rows={rows}
              columns={columns}
              onRowClick={handleRowClick}
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
        </Container>

        <Dialog
          open={open}
          onClose={handleClose}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "& .MuiDialog-paper": {
              borderRadius: "15px",
              border: "2px solid",
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#F4F5F7 ",
            },
            // borderRadius:15,
          }}
        >
          <DialogTitle
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "black",
            }}
          >
            Ticket
          </DialogTitle>
          <form onSubmit={handleSubmit(onSubmit)}>
            <DialogContent>
              <DialogContentText>
                <Grid container spacing={2}>
                  <Grid item xs={12} lg={12}>
                    <Controller
                      name="title"
                      control={control}
                      defaultValue=""
                      rules={{required: "title Name is required"}}
                      render={({field}) => (
                        <TextField
                          {...field}
                          label="title"
                          size="small"
                          autoComplete="off"
                          fullWidth
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} lg={12}>
                    <Controller
                      name="description"
                      control={control}
                      defaultValue=""
                      rules={{required: "title Name is required"}}
                      render={({field}) => (
                        <TextField
                          {...field}
                          label="description"
                          multiline
                          rows={2}
                          autoComplete="off"
                          fullWidth
                          inputProps={{maxLength: 300}}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} lg={12}>
                    <Stack direction={"row"} spacing={2}>
                      <Controller
                        name="status"
                        control={control}
                        defaultValue=""
                        rules={{required: "Status is required"}}
                        render={({field}) => (
                          <FormControl fullWidth size="small">
                            <InputLabel id="status-label">status</InputLabel>
                            <Select
                              {...field}
                              labelId="status-label"
                              label="Status"
                              autoComplete="off"
                            >
                              <MenuItem value="open">Open</MenuItem>
                              <MenuItem value="close">Close</MenuItem>
                              <MenuItem value="permanently close">
                                Permanently Close
                              </MenuItem>
                            </Select>
                          </FormControl>
                        )}
                      />
                      <Controller
                        name="date"
                        control={control}
                        defaultValue=""
                        render={({field}) => (
                          <TextField
                            {...field}
                            size="small"
                            fullWidth
                            type="date"
                            label=""
                          />
                        )}
                      />
                    </Stack>

                    <Controller
                      name="Replay"
                      control={control}
                      defaultValue=""
                      render={({field}) => (
                        <TextField
                          {...field}
                          size="small"
                          sx={{mt: 4}}
                          type="Replay"
                          label="Replay Send Massage"
                        />
                      )}
                    />
                    <Button
                      autoFocus
                      variant="contained"
                      type="submit"
                      color="primary"
                      sx={{mt: 4, ml: 2}}
                    >
                      Replay Send Massage
                    </Button>
                  </Grid>
                </Grid>
              </DialogContentText>
            </DialogContent>

            <DialogActions>
              <Button
                autoFocus
                variant="contained"
                type="submit"
                color="primary"
              >
                Save
              </Button>
              <Button
                onClick={handleClose}
                variant="contained"
                type="submit"
                color="error"
              >
                Cancel
              </Button>
            </DialogActions>
          </form>
        </Dialog>

        <Dialog
          open={openDialog}
          onClose={() => setOpenDialog(false)}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "& .MuiDialog-paper": {
              borderRadius: "15px",
              border: "2px solid",
            },
          }}
        >
          <DialogContent>
            {/* Display details of the selected row */}
            {selectedRow && (
              <Grid container spacing={2} mt={0}>
                <Grid item xs={12}>
                  <Stack direction={"row"} spacing={2}>
                    <TextField
                      label="Ticket ID"
                      value={selectedRow.ticketid}
                      size="small"
                      fullWidth
                      InputProps={{readOnly: true}}
                      sx={{mb: 1}}
                    />
                    <TextField
                      label="title"
                      value={selectedRow.title}
                      size="small"
                      fullWidth
                      InputProps={{readOnly: true}}
                      sx={{mb: 1}}
                    />
                  </Stack>
                </Grid>

                <Grid item xs={12}>
                  <Stack direction={"row"} spacing={2}>
                    <TextField
                      label=""
                      value={selectedRow.date}
                      size="small"
                      fullWidth
                      InputProps={{readOnly: true}}
                      sx={{mb: 1}}
                    />
                    <TextField
                      label="status"
                      value={selectedRow.status}
                      size="small"
                      fullWidth
                      InputProps={{readOnly: true}}
                      sx={{mb: 1}}
                    />
                  </Stack>
                </Grid>
              </Grid>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)}>Close</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </>
  );
}
