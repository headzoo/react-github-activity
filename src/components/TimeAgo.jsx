'use strict';

import React from 'react';

function ago(date) {
  if (typeof date === 'string') {
    date = new Date(date);
  }
  
  let seconds = Math.floor((new Date() - date) / 1000);
  let interval = Math.floor(seconds / 31536000);
  
  if (interval > 1) {
    return interval + ' years';
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + ' months';
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + ' days';
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + ' hours';
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + ' minutes';
  }
  
  return Math.floor(seconds) + ' seconds';
}

const TimeAgo = ({date}) => (
  <span>{ago(date)} ago</span>
);

export default TimeAgo;