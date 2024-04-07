import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import {experimentalStyled as styled} from "@mui/material/styles";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {Stack} from "@mui/material";
import Client from "./Client";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import {useNavigate} from "react-router-dom";
const drawerWidth = 240;
const navItems = ["admin", "UserTicket", "Support", "LogOut"];

function DrawerAppBar({...props}) {
  const {window} = props;
  const {totalticketss} = props;
  const {closedTicket} = props;

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const [total, setTotal] = React.useState(null);
  React.useEffect(() => {
    console.log("totalticketss", totalticketss);
    setTotal(totalticketss);
    setTotal(closedTicket);
  }, [totalticketss, closedTicket]);

  const totalTickets = [
    {
      name: "Total Tickets",
      value: totalticketss || 0,
      icon: (
        <TaskAltIcon fontSize="medium" sx={{bgcolor: "#", color: "#218DF9"}} />
      ),
    },
    {
      name: "Pending Tickets",
      value: totalticketss || 0,
      icon: (
        <HourglassBottomIcon
          fontSize="medium"
          sx={{bgcolor: "#", color: "yellow"}}
        />
      ),
    },
    {
      name: "Closed Tickets",
      value: totalticketss || 0,
      icon: (
        <LockPersonIcon fontSize="medium" sx={{bgcolor: "#", color: "green"}} />
      ),
    },
    {
      name: "Deleted Tickets",
      value: totalticketss || 0,
      icon: (
        <DeleteForeverIcon
          fontSize="medium"
          sx={{bgcolor: "#", color: "red"}}
        />
      ),
    },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  //mobile view drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{textAlign: "center"}}>
      <Typography variant="h6" sx={{my: 2}}>
        Support System
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{textAlign: "center"}}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleNavigate = (item) => {
    if (item === "Admin") {
      navigate("/admin");
    } else if (item === "UserTicket") {
      navigate("/user-ticket");
    } else if (item === "Support") {
      navigate("/tech-support");
    } else if (item === "LogOut") {
      navigate("/");
    }
  };

  const [rows, setRows] = React.useState([]);

  return (
    <>
      <Box sx={{display: "flex"}}>
        <CssBaseline />
        <AppBar component="nav" sx={{bgcolor: "#01152B"}}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{mr: 2, display: {sm: "none"}}}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
              Support System
            </Typography>
            <Box sx={{display: {xs: "none", sm: "block"}}}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{color: "#fff"}}
                  onClick={() => handleNavigate(item)}
                >
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: {xs: "block", sm: "none"},
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>

        <Box
          mt={"56px"}
          component="main"
          sx={{
            p: 2,
            width: "100%",
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h5">Ticket Admin Dashboard</Typography>
        </Box>
      </Box>
      <Stack
        sx={{display: "flex", alignItems: "center", justifyContent: "center"}}
      >
        <Grid container pt={{lg: 4, xs: 2}} pl={{lg: 8, xs: 1}} spacing={2}>
          {totalTickets.map((item, index) => (
            <Grid item key={index} lg={3} xs={6} sx={{color: "#D5D5D5"}}>
              <Paper
                elevation={5}
                sx={{
                  width: {lg: 220, xs: 160},
                  height: 50,
                  display: "flex",
                  bgcolor: "#f3f3f3",
                }}
              >
                <Stack direction={"row"} alignItems={"center"} spacing={1}>
                  <IconButton>{item.icon}</IconButton>
                  <Typography color={"#000000"}>{item.name}</Typography>
                  <Typography color={"#000000"}>:</Typography>
                  <Typography color={"#000000"} fontWeight={"bold"}>
                    {" "}
                    {item.value}
                  </Typography>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Stack>
      {/* <Box>
        <Client />
      </Box> */}
    </>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
