import React from "react";

import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import { IconButton } from "@material-ui/core";
import '../style/PersonLists.css';
import { List } from "@material-ui/core";
import Listes from "./List";
import ListeTiles from "./ListeTiles";
import IModal from "../modal/mess";
import { SwipeableDrawer } from "@material-ui/core";

function PersonLists(){

  const [state, setState] = React.useState(
   
    false
   
  );

  const toggleDrawer = (open:boolean) => (
    event:  React.MouseEvent
  ) => {
setState(open);
  };
    const chats:IModal[]=[
        {image:'pexels-sora-shimazaki-5669602.jpg',nom:"AntaresBot",sms:"desole je ne peux pas ...",index:1},
         {image:'pexels-ali-pazani-2681751.jpg',nom:"Agramant Jobin",sms:"j'aimerais en savoir plus..",index:2},
         {image:'pexels-flickr-146083.jpg',nom:"Agnès Étoile",sms:"bonjour, peut on sav..",index:2},
         {image:'pexels-harsh-kushwaha-1689731.jpg' ,nom:"Rachelle Blanchard",sms:"Bonjour",index:2},
         {image: 'pexels-josh-hild-4270292.jpg',nom:"alcort",sms:"bonjour , ceci est..",index:1},
         {image:'pexels-sora-shimazaki-5669602.jpg',nom:"AntaresBot",sms:"desole je ne peux pas ...",index:1},
         {image:'pexels-ali-pazani-2681751.jpg',nom:"Agramant Jobin",sms:"j'aimerais en savoir plus..",index:2},
         {image:'pexels-flickr-146083.jpg',nom:"Agnès Étoile",sms:"bonjour, peut on sav..",index:2},
         {image:'pexels-harsh-kushwaha-1689731.jpg' ,nom:"Rachelle Blanchard",sms:"Bonjour",index:2},
         {image: 'pexels-josh-hild-4270292.jpg',nom:"alcort",sms:"bonjour , ceci est..",index:1},
         {image:'pexels-sora-shimazaki-5669602.jpg',nom:"AntaresBot",sms:"desole je ne peux pas ...",index:1},
         {image:'pexels-ali-pazani-2681751.jpg',nom:"Agramant Jobin",sms:"j'aimerais en savoir plus..",index:2},
         {image:'pexels-flickr-146083.jpg',nom:"Agnès Étoile",sms:"bonjour, peut on sav..",index:2},
         {image:'pexels-harsh-kushwaha-1689731.jpg' ,nom:"Rachelle Blanchard",sms:"Bonjour",index:2},
         {image: 'pexels-josh-hild-4270292.jpg',nom:"alcort",sms:"bonjour , ceci est..",index:1},
    
     ]
    return(
        <div className="Plistes">
            <div className="headers">
                <IconButton onClick={toggleDrawer(true)} className="icobu" edge="start">
                <MenuOutlinedIcon id ="q"className="iconmen"/>
                </IconButton>
                <SwipeableDrawer 
              
                anchor={'left'}
                open={state}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                >
      <Listes/>
    </SwipeableDrawer>

    <form>
                    <input type="text" className="search-input" placeholder="Recherche"/>
                   
                </form>
           
            </div>
            <div className="listetiles">
            <List>
                {chats.map((chat)=>(
               <ListeTiles image={chat.image} nom={chat.nom} sms={chat.sms} index={chat.index}/>  
                ))}
            </List>
            </div>

        </div>
    );
}
export default PersonLists;