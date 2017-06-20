'use strict';

import React from 'react';
import { ActorLink, RepoLink, BranchLink } from './Links';

import Avatar from './Avatar';

const CreateEvent = ({data}) => (
  <div className="rgs-event-title">
    <ActorLink actor={data.actor} />&nbsp;
    created {data.payload.ref_type}&nbsp;
    {data.ref ?
      <span><BranchLink repo={data.repo} payload={data.payload} /> at &nbsp;</span>
    : null}
    <RepoLink repo={data.repo} />
  </div>
);

export default CreateEvent;