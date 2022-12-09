import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardProducts from './Card';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme)=>({
    root:{
        flexGrow:1,
        padding: '2rem'
    },
    }));

export default function Products() {
    const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardProducts></CardProducts>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <CardProducts></CardProducts>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <CardProducts></CardProducts>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <CardProducts></CardProducts>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <CardProducts></CardProducts>
        </Grid>
      </Grid>
    </Box>
  );
}
