import React from 'react';
import {Link} from "react-router-dom";
import {FOOTER_ROUTES} from "../../constants/routes.constants";

const FooterLinksList = ({light}) => {
    return (
        <div className={"FooterLinksListContainer"}>
            <ul className={"FooterLinksList"}>
                {
                    FOOTER_ROUTES.map(route=>{
                        return <li className={light ? "FooterLinksListItem" : "FooterLinksListItem Dark"} key={route.name}>
                            <Link to={route.link}>{route.name}</Link>
                        </li>
                    })
                }
            </ul>
        </div>
    );
};

export default FooterLinksList;
