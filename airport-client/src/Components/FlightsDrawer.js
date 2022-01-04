import React,{useEffect, useState,useContext} from 'react'
import { styled, useTheme } from '@mui/material/styles';
import Logo from '../Assets/logo.png';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightIcon from '@mui/icons-material/Flight';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import { WaitingAirplanesContext } from "../Context/WaitingAirplanesContext";

const drawerWidth = 300;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: 'gray',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    backgroundColor: 'black',
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor: 'red',
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer(props) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [airplanesTakeoff, setAirplanesTakeoff] = useState([]);
  const [airplanesLand, setAirplanesLand] = useState();
  const {airplanes, setAirplanes} = useContext(WaitingAirplanesContext);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <img src={Logo} style={{width:50, marginRight: '18px'}}/>
          <Typography variant="h6" noWrap component="div">
            Idan's Terminal
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
        <ListItem button>
            
        <ListItemIcon>
            <FlightLandIcon color="primary"/>
        </ListItemIcon>
            <ListItemText primary="Landing Flights" />
        </ListItem>

          {airplanes.map((flight, index) => (
            flight.airplaneState === 1 ?
            <Tooltip title={flight.airplainNumber} placement="right">
              <ListItem button key={flight.airplainNumber}>
                  <ListItemIcon>
                    <FlightIcon  color="primary"/>
                  </ListItemIcon>
                  <ListItemText secondary={flight.airplainNumber}>{flight.country} - Tel Aviv IDAN</ListItemText>
              </ListItem>
            </Tooltip>
            : null
          ))}

        </List>
        <Divider />
        <List>
            
        <ListItem button>
            
        <ListItemIcon>
            <FlightTakeoffIcon color="success"/>
        </ListItemIcon>
            <ListItemText primary="Take Off Flights"/>
        </ListItem>
        {airplanes.map((flight, index) => (
            flight.airplaneState === 0 ?
            <Tooltip title={flight.airplainNumber} placement="right">
            <ListItem button key={flight.airplainNumber}>
              <ListItemIcon>
                <FlightIcon color="success"/>
              </ListItemIcon>
                <ListItemText secondary={flight.airplainNumber}>Tel-Aviv IDAN - {flight.country}</ListItemText>
            </ListItem>
            </Tooltip>
            : null
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        
        <Grid container style={{height: "85vh", width: "100%"}}>
          {props.children}
        </Grid>
      </Box>
    </Box>
  );
}