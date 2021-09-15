import React from "react";
import PersonLists from "./PersonLists";
import PageDiscu from "./PageDiscu";
import '../style/Pageprinci.css';

function Pageprinci(){
    return(
        <div className="pageCorps"> 
        <PersonLists/>
            <PageDiscu/>
            
        </div>
    );
}
export default Pageprinci;