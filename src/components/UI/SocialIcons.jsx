import React from 'react';
import { SOCIAL_NETWORKS } from "../../constants/social.constants";


const SocialIcons = () => {
  return (
    <div className={"SocialIconList"}>
      {
        SOCIAL_NETWORKS.map(icon=>{
          return <a href={icon.link} className={"SocialIconWrapper"}>
            <svg className="SocialIcon" viewBox="0 0 26 25">
              <use xlinkHref={`#${icon.name}`} />
            </svg>
          </a>
        })
      }
    </div>
  );
};

export default SocialIcons;