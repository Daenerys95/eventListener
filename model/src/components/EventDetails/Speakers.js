import React from 'react';

import infos from './data/infos';


const Speakers = () => {
return(
  <div className="speakers">
    { infos.map((speaker) => {
    const unknownUser = speaker.avatar === "" ? infos.user  : speaker.avatar;
      return (
        <ul key={speaker.id}>
          <li><img src={speaker.avatar} alt="avatar"/></li>
          <li>{speaker.name}</li>
          <li>{speaker.role}</li>
          <li>{speaker.company}</li>
        </ul>
      )
    })}
  </div>
);  
}



export default Speakers;
