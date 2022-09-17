import React from 'react';
import { SOCIAL_NETWORKS } from "../../constants/social.constants";


const SocialIcons = () => {
  return (
    <div>
      {
        SOCIAL_NETWORKS.map(icon=>{
          return <div>
            <svg className="socialList__itemLinkSvg" viewBox="0 0 26 25">
              <use xlinkHref={`#${icon.name}`} />
            </svg>
          </div>
        })
      }
    </div>
  );
};

export default SocialIcons;