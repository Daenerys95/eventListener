import React from 'react';

import infos from './data/infos';


const Speakers = () => {
return(
  <div className="speakers">
    <h1>Intervenants</h1>
    { infos.map((speaker) => {
    const unknownUser = speaker.avatar === "" ? "src/components/EventDetails/images/user.png"  : speaker.avatar;
      return (
        <ul key={speaker.id}>
          <li><img className="speakers-img" src={unknownUser} alt="avatar"/></li>
          <div className="speakers-overlay">
            <li className="speakers-text">{speaker.name}</li>
            <li className="speakers-text">{speaker.role}</li>
            <li className="speakers-text">{speaker.company}</li>
          </div>
        </ul>
      )
    })}
  </div>
);  
}



export default Speakers;
