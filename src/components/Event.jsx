'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import CreateEvent from './CreateEvent';
import ForkEvent from './ForkEvent';
import IssueCommentEvent from './IssueCommentEvent';
import PullRequestEvent from './PullRequestEvent';
import PushEvent from './PushEvent';
import WatchEvent from './WatchEvent';
import Octicon from './Octicon';
import TimeAgo from './TimeAgo';

const EVENT_ICONS = {
  'CreateEvent': 'git-branch',
  'WatchEvent':  'star',
  'PushEvent':   'git-commit',
  'IssueCommentEvent': 'comment-discussion'
};

export default class Event extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  };
  
  constructor(props) {
    super(props);
  }
  
  renderEvent(data) {
    switch(data.type) {
      case 'CreateEvent':
        return <CreateEvent {...this.props} />;
        break;
      case 'WatchEvent':
        return <WatchEvent {...this.props} />;
        break;
      case 'PushEvent':
        return <PushEvent {...this.props} />;
        break;
      case 'IssueCommentEvent':
        return <IssueCommentEvent {...this.props} />;
        break;
      default:
        return null;
        break;
    }
  }
  
  render() {
    const { data } = this.props;
    const event = this.renderEvent(data);
    if (!event) {
      return null;
    }
    
    return (
      <li className="rgs-event">
        <div className="rgs-event-icon">
          <Octicon name={EVENT_ICONS[data.type]} />
        </div>
        <div className="rgs-event-inner">
          <div className="rgs-event-time">
            <TimeAgo date={data.created_at} />
          </div>
          {event}
        </div>
      </li>
    );
  }
}
