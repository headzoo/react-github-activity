import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Event from './Event';

const Stream = ({ events, types, className, ...elementProps }) => (
  <ul className={classNames('rgs-stream', className)} {...elementProps}>
    {events.map((e, i) => {
      if (types.indexOf(e.type) === -1) {
        return null;
      }
      return (
        <Event key={i} data={e} />
      );
    })}
  </ul>
  );

Stream.propTypes = {
  /**
   * The event stream data.
   */
  events:    PropTypes.array.isRequired,
  /**
   * List of events to display.
   */
  types:     PropTypes.array,
  /**
   * Classes to add to the container element.
   */
  className: PropTypes.string
};

Stream.defaultProps = {
  types: [
    'CreateEvent',
    'ForkEvent',
    'IssueCommentEvent',
    'PullRequestEvent',
    'PushEvent',
    'WatchEvent'
  ]
};

export default Stream;
