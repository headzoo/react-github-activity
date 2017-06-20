'use strict';

import React from 'react';
import { ActorLink, RepoLink, CommitLink } from './Links';
import Avatar from './Avatar';

const PushEvent = ({data}) => (
  <div>
    <div className="rga-event-title">
      <ActorLink actor={data.actor} /> pushed to <RepoLink repo={data.repo} />
    </div>
  
    <div className="rga-event-details">
      <Avatar actor={data.actor} />
      <div className="rga-event-message">
        <CommitLink
          repo={data.repo}
          commit={data.payload.commits[0]} /> {data.payload.commits[0].message}
      </div>
    </div>
  </div>
);

export default PushEvent;