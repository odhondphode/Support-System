// import React, { useState } from 'react';
// import { Button, TextField, Typography, Box } from '@mui/material';

// const RegistrationPage = ({ onRegister, onNavigateToLogin }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleRegister = () => {
//     // Perform registration logic here
//     onRegister({ email, password });
//   };

//   return (
//     <form>
//              <Box
//               display={"flex"}
//               flexDirection={"column"}
//               maxWidth={400}
//               alignItems={"center"}
//               justifyContent={"center"}
//               margin={"auto"}
//               mt={5}
//               p={3}
//               borderRadius={5}
//               boxShadow={"5px 5px 10px #ccc"}
//               sx={{
//                 ":hover": {
//                   boxShadow: "10px 10px 20px #ccc",
//                 },
//               }}
//             >
//       <Typography variant="h3" gutterBottom>
//         Register
//       </Typography>
//       <TextField
//         label="Email"
//         variant="outlined"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         fullWidth
//         margin="normal"
//       />
//       <TextField
//         label="Password"
//         variant="outlined"
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         fullWidth
//         margin="normal"
//       />
//       <Button variant="contained" color="primary" onClick={handleRegister}>
//         Register
//       </Button>
//       <Typography variant="body1" sx={{ marginTop: 2 }}>
//         Already have an account?{' '}
//         <Button onClick={onNavigateToLogin} color="primary">
//           Login
//         </Button>
//       </Typography>
//     </Box>
//     </form>
//   );
// };

// export default RegistrationPage;

import React, {useState} from "react";
import {Button, TextField, Typography, Box, Link} from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const RegistrationPage = () => {
  const [name,setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const handleRegister = () => {
    // Perform registration logic here
    console.log("data", {email, password});
    setShowAlert(true);
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    
    <form>
     {showAlert && (
        <Box mt={7}>
          <Alert bgcolor="#08D80E">
            <AlertTitle>Success</AlertTitle>
            Registration successful!
          </Alert>
        </Box>
      )}
      <Box
        display={"flex"}
        flexDirection={"column"}
        maxWidth={400}
        alignItems={"center"}
        justifyContent={"center"}
        margin={"auto"}
        mt={5}
        p={3}
        borderRadius={5}
        boxShadow={"5px 5px 10px #ccc"}
        sx={{
          ":hover": {
            boxShadow: "10px 10px 20px #ccc",
          },
        }}
      >
        <Typography variant="h3" gutterBottom>
          Register
        </Typography>
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" hcolor="primary" onClick={handleRegister}>
          Register
        </Button>
        <Typography variant="body1" sx={{marginTop: 2}}>
          Already have an account?{" "}
          <Button component={Link} href="/" color="primary">
            Login
          </Button>
        </Typography>
      </Box>

     
    </form>
  );
};

export default RegistrationPage;
