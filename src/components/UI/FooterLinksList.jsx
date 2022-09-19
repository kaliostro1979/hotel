import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {FOOTER_ROUTES} from "../../constants/routes.constants";
import {MainContext} from "../../context/MainContext";

const FooterLinksList = ({light}) => {
    const {setOpen, activeLanguage} = useContext(MainContext)

    return (
        <div className={"FooterLinksListContainer"}>
            <ul className={"FooterLinksList"}>
                {
                    FOOTER_ROUTES.map(route=>{
                        return <li className={light ? "FooterLinksListItem" : "FooterLinksListItem Dark"} key={route.name}>
                            <Link to={`${activeLanguage}/page/${route.path}`} onClick={()=>setOpen(false)}>{route.name}</Link>
                        </li>
                    })
                }
            </ul>
        </div>
    );
};

export default FooterLinksList;
