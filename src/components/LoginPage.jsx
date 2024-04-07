// import React, { useState } from 'react';
// // import { useHistory } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';
// import { Box, Button, Stack, TextField } from '@mui/material';

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const { login } = useAuth();
//   // const history = useHistory();

//   const handleLogin = () => {
//     // Call your authentication API here
//     const user = { email, password };
//     login(user);
//     // history.push('/end-user');
//   };

//   return (

//       <Stack spacing={2} ml={50} display={"flex"} alignItems={"center"} justifyContent={"center"}>
//       <TextField
//         label="Email"
//         variant="outlined"
//         value={email}
//         onChange={e => setEmail(e.target.value)}
//       />
//       <TextField
//         label="Password"
//         variant="outlined"
//         type="password"
//         value={password}
//         onChange={e => setPassword(e.target.value)}
//       />
//       <Button variant="contained" onClick={handleLogin}>Login</Button>
//     </Stack>

//   );
// };

// export default LoginPage;

// import {Box, Typography, TextField, Button} from "@mui/material";
// import React from "react";

// const LoginPage = () => {

//   return (
//     <>
//       <form>
//         <Box
//           display={"flex"}
//           flexDirection={"column"}
//           maxWidth={400}
//           alignItems={"center"}
//           justifyContent={"center"}
//           margin={"auto"}
//           mt={5}
//           p={3}
//           borderRadius={5}
//           boxShadow={"5px 5px 10px #ccc"}
//           sx={{
//             ":hover": {
//               boxShadow: "10px 10px 20px #ccc",
//             },
//           }}
//         >
//           <Typography variant="h3" padding={3} textAlign={"center"}>
//             Login
//           </Typography>
//           <TextField
//             margin="normal"
//             type="text"
//             variant="outlined"
//             placeholder="Name"
//           />
//           <TextField
//             margin="normal"
//             type="email"
//             variant="outlined"
//             placeholder="Email"
//           />
//           <TextField
//             margin="normal"
//             type="passworld"
//             variant="outlined"
//             placeholder="Passworld"
//           />
//           <Button sx={{mt: 3, borderRadius: 3}} variant="contained">
//             Login
//           </Button>
//           <Button sx={{mt: 3, borderRadius: 3}}>CHANGE TO SIGNUP</Button>
//         </Box>
//       </form>
//     </>
//   );
// };

// export default LoginPage;

import React, {useState} from "react";
import {Button, TextField, Typography, Box, Link} from "@mui/material";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Perform login logic here
    console.log("data", {email, password});
    navigate("/admin");
  };

  const handlenavigate = () => {
    navigate("/register");
  };
  const handlenavigatee = () => {
    navigate("/tech-support");
  };

  return (
    <form>
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
          Login
        </Typography>
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
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Login
        </Button>
        <Typography variant="body1" sx={{marginTop: 2}}>
          Don't have an account?{" "}
          <Button component={Link} href="/register" color="primary">
            Sign Up
          </Button>
        </Typography>
      </Box>
    </form>
  );
};

export default LoginPage;
