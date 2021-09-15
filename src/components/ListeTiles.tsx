import React from "react";
import { Avatar } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import '../style/ListeTiles.css';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SupervisorAccountRoundedIcon from '@material-ui/icons/SupervisorAccountRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import IModal from "../modal/mess";
import '../style/image.css';

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
function ListeTiles(props:IModal){
   const  chat:IModal = props;
   const a:string =chat.image;
    const classes= useStyles();
    return (
        <div className="message" key={chat.nom.toString()} >
            <div className="sary">
            <Avatar  className={classes.large} >
              <img src={require('../asset/'+a).default} alt="sd" />
             </Avatar>
            </div>
            <div className="soratra">
               
                <div className="pligne">
                    <div className="ico-nom">
                    <ListItemIcon>{chat.index % 2 === 0 ? <PersonRoundedIcon className="icoa" /> : <SupervisorAccountRoundedIcon className="icoa" />}</ListItemIcon>
                    <h1>{chat.nom}</h1>
                    </div>
                      <p>0{Math.floor(Math.random() * 10)}:0{Math.floor(Math.random() * 10)}</p>
                </div>
                <div className="dligne" >
                  <div>
                  <p>
                   {chat.sms}
                   </p>
                  </div>
                   <div className="msgnonlu">
                       <p id="msg">{Math.floor(Math.random() * 10)}</p>
                   </div>

                </div>
            </div>
        </div>
    );
}
export default ListeTiles;