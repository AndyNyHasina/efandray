import React from "react";
import logo from '../asset/1.jpg'
import '@fontsource/roboto';
import '../style/image.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import '../style/Identifiants.css';
import { Avatar } from "@material-ui/core";
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { IconButton } from "@material-ui/core";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(20),
      },
    },
   
   
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }),
);

function Identifiant(){
    const classes= useStyles();
    return(
<div className= "info">
    <div className="idiv_1">
    <Avatar className={classes.large}>
        <img src={logo} alt="Avatar"/>
    </Avatar>
    <IconButton  edge="end" className="menuButton">
       <BookmarkBorderIcon style={{ color: "white" }}/>
    </IconButton> 
    </div>
    <div className="idivuser">
        <div className="idiv_info">
            <h1> ANDRIAMBOAHANGY An..</h1>
            <h1>0347469965</h1>
        </div>
        <ExpandMoreIcon style={{ color: "white" }}/>
    </div>
</div>

    );
}
export default Identifiant;