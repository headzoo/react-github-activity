'use strict';

import React from 'react';

const Avatar = ({actor}) => (
  <a href={actor.url}>
    <img className="rga-event-avatar" src={actor.avatar_url} />
  </a>
);

export default Avatar;