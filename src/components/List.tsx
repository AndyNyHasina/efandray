import React from "react";
import clsx from 'clsx';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { List } from "@material-ui/core";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import SupervisorAccountRoundedIcon from '@material-ui/icons/SupervisorAccountRounded';
import CallRoundedIcon from '@material-ui/icons/CallRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import WifiTetheringOutlinedIcon from '@material-ui/icons/WifiTetheringOutlined';
import ListItemText from '@material-ui/core/ListItemText';
import Identifiant from './Identifiant';
import { Divider } from '@material-ui/core';
import '../style/Listes.css';
const useStyles = makeStyles({
    list: {
      minWidth:300,
      
      
    },
    
  });
function Listes(){
    const classes = useStyles();
    return(
        <div
       id="lis"
        className={clsx(classes.list)}
         > 
          <List>
            <Identifiant/>
          </List>
          <Divider/>
          <List>
              <ListItem button key='Nouveau groupe'>
                <ListItemIcon><SupervisorAccountRoundedIcon className="listeicoparams" /></ListItemIcon>
                <ListItemText className="listeparams"  primary='Nouveau groupe' />
              </ListItem>
              <ListItem button key='Nouveau Canal'>
                <ListItemIcon><WifiTetheringOutlinedIcon className="listeicoparams"/></ListItemIcon>
                <ListItemText className="listeparams" primary='Nouveau Canal' />
              </ListItem>
              <ListItem button key='Contact'>
                <ListItemIcon><PersonRoundedIcon className="listeicoparams"/></ListItemIcon>
                <ListItemText className="listeparams" primary='Contact' />
              </ListItem>
              <ListItem button key='Appel'>
                <ListItemIcon><CallRoundedIcon className="listeicoparams"/></ListItemIcon>
                <ListItemText className="listeparams" primary='Appel' />
              </ListItem>
              <ListItem button key='Parametre'>
                <ListItemIcon><SettingsRoundedIcon className="listeicoparams"/></ListItemIcon>
                <ListItemText className="listeparams" primary='Parametre' />
              </ListItem>
            
            
          </List>
          
         
         
          
            
        </div>
      );
}
export default Listes;