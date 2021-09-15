import React from "react";
import { ListItemIcon } from "@material-ui/core";
import CallIcon from '@material-ui/icons/Call';
import MoreVertRoundedIcon from '@material-ui/icons/MoreVertRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import AttachmentRoundedIcon from '@material-ui/icons/AttachmentRounded';
import SentimentSatisfiedAltRoundedIcon from '@material-ui/icons/SentimentSatisfiedAltRounded';
import MicNoneRoundedIcon from '@material-ui/icons/MicNoneRounded';
import '../style/PageDiscu.css';
import Resaka from "./Resaka";
import { IconButton } from "@material-ui/core";
function PageDiscu(){
    return(
        <div className="pageDiscucorps">
            <div className="PageDiscuheader">
                    <div>
                        <h1>
                        AI.MARKETING Network (FR)
                        </h1>
                        <p>
                            en ligne il y a 2 heures
                        </p>
                    </div>
                    <div className="listICo">
                    <ListItemIcon className="listt"> 
                    <SearchRoundedIcon className="listeicoparams"/>
                    <CallIcon className="listeicoparams"/>
                    <MoreVertRoundedIcon className="listeicoparams"/>
                    </ListItemIcon>
                    </div>
            </div>
            <div className="simeso">
            <Resaka  />
            </div>
            <div className="PageDiscufooter">
            <IconButton edge="start"className="a"> 
            <AttachmentRoundedIcon className="listeicoparams"/>
            </IconButton>
            <form>
                    <input type="text" className="textecrit" placeholder="Ecrivez un message"/>
                   
            </form>
            <IconButton edge="end" className="a"> 
            <SentimentSatisfiedAltRoundedIcon className="listeicoparams"/>
            <MicNoneRoundedIcon className="listeicoparams"/>


            </IconButton>
            </div>
        </div>
    );
}
export default PageDiscu;