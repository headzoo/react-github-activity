import React from 'react';

const Avatar = ({ actor }) => (
  <a href={actor.url}>
    <img className="rgs-event-avatar" src={actor.avatar_url} alt="Avatar" />
  </a>
);

export default Avatar;
