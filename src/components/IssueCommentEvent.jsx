'use strict';

import React from 'react';
import { ActorLink, RepoLink, IssueLink } from './Links';
import Avatar from './Avatar';

const IssueCommentEvent = ({data}) => (
  <div>
    <div className="rga-event-title">
      <ActorLink actor={data.actor} />&nbsp;
      commented on issue&nbsp;
      <IssueLink
        repo={data.repo}
        issue={data.payload.issue}
        comment={data.payload.comment} />
    </div>
    
    <div className="rga-event-details">
      <Avatar actor={data.actor} />
      <div className="rga-event-message">
        {data.payload.comment.body}
      </div>
    </div>
  </div>
);

export default IssueCommentEvent;