import { useState, useEffect, useContext } from "react";
import "./addLinks.css";
import { SocialMediaLinks } from "../../socialsLinks";
import { LinkContext } from "../../context/LinkContext";

export const AddSocialLink  =() =>{

    const data =useContext(LinkContext);

    const{linkOperation, handleLinkOperations}= data;

    const collectLinks = (id)=> {
        const collectLink = SocialMediaLinks.filter((links)=>{
            if(id==links.id){
                return links;
            }
        });
        handleLinkOperations([...linkOperation, ...collectLink]);
    };
    
    return(
        <>
            <div className="container">
                {SocialMediaLinks.map((items)=>{
                    return(
                        <button style={{marginTop: '10px', border:'black'}} onClick={()=>{
                            collectLinks(items.id);
                        }}>
                        <div key={items.id} className="icons">
                            <div className="addedicons">
                            {items.icon}
                            </div>
                        </div>
                        </button>
                    );
                })}
            </div>
        </>
    );
};