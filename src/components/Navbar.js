import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from '../assets/pexels-nao-triponez-129207.jpg'
import { makeStyles } from '@mui/styles';
import { ShoppingCart } from '@mui/icons-material';
import Badge from '@mui/material/Badge';

const useStyles = makeStyles({
    root:{
        flexGrow:1,
    },
    grow:{
        flexGrow:1,
    },
    appBar23:{
        backgroundColor:"whitesmoke",
        boxShadow:"none",
        fontSize:"1rem"
    },
    button:{
        marginLeft:"1.5rem",
    },
    img:{
        marginRight:"10px",
        height:"3rem",
        borderRadius:"80%"
    },
    });

export default function NavBar() {
    const classes = useStyles();
    return (
    <Box className={classes.root}>
        <AppBar position="fixed">
        <Toolbar className={classes.appBar23}>
        <IconButton
            edge="start"
        >
            <img src={logo} className={classes.img}></img>
            </IconButton>
            <div className={classes.grow}></div>
            <Typography variant="h6" color="textPrimary" component="p">
            Hello guest
            </Typography>
            <div className={classes.button}>
            <Button variant="outlined">
            <strong>Sign In</strong>
            </Button>
            <IconButton aria-label='Show cart items' color='inherit'>
                <Badge badgeContent={4} color="secondary">
                    <ShoppingCart fontSize='large' color='primary'></ShoppingCart>
                </Badge>
            </IconButton>
            </div>
        </Toolbar>
        </AppBar>
    </Box>
);
}
