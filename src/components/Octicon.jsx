import React from 'react';

const Octicon = ({ name }) => (
  <span className={`octicon octicon-${name}`} />
);

Octicon.STYLESHEET_URL = '//cdnjs.cloudflare.com/ajax/libs/octicons/2.0.2/octicons.min.css';

export default Octicon;
