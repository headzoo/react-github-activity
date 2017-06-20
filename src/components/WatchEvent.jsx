'use strict';

import React from 'react';
import { ActorLink, RepoLink } from './Links';

const WatchEvent = ({data}) => (
  <div className="rga-event-title">
    <ActorLink actor={data.actor} /> starred <RepoLink repo={data.repo} />
  </div>
);

export default WatchEvent;