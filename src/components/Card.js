import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AddShoppingCart } from '@mui/icons-material';
import clsx from 'clsx';
import { makeStyles } from '@mui/styles';
import accounting from "accounting";

const useStyles = makeStyles((theme)=>({
    root:{
        maxWidth: 345,
      },
      action:{
        marginTop:"10rem",
      },
      media:{
        height:304,
      },
      expand:{
        transform:"rotate(0deg)",
        marginLeft:"100",
        padding:100
        
      },
      expandOpen:{
        transform:"rotate(180deg)",
      },
  }));

export default function CardProducts() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    return(
        <Card className={classes.root}>
             <CardHeader
        action={
          <Typography
            className={classes.action}
            variant='h5'
            color='textSecondary'>
            {accounting.formatMoney(50,"$")}
          </Typography>
        }
        title="Coffe Arabic"
        subheader="In Stock"
      />
      <CardMedia
        component="img"
        className={classes.media}
        image="https://st2.depositphotos.com/3944627/7940/i/450/depositphotos_79404590-stock-photo-white-coffee-cup-and-coffee.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        like snow
        </Typography>
      </CardContent>
      <CardActions disableSpac ing>
        <IconButton aria-label="add to favorites">
          <AddShoppingCart fontSize='large'></AddShoppingCart>
        </IconButton>
        {Array(4)
        .fill()
        .map((_,i)=>(<p>&#11088;</p>
        )
        )}
        <IconButton
          className={clsx(classes.expand,{
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
         <Typography paragraph> Coffe is screem</Typography>
        </CardContent>
      </Collapse>
        </Card>
    )
}

